#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { glob } from "glob";
import express from "express";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(process.env.PROJECT_ROOT || process.cwd());

const safeResolve = (p) => {
  const full = path.resolve(PROJECT_ROOT, p);
  if (!full.startsWith(PROJECT_ROOT)) throw new Error("Path escapes project root.");
  return full;
};

// ----- MCP stdio server -----
const mcp = new Server(
  { name: "web-mcp", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

mcp.tool(
  "read_text",
  {
    description: "Read a UTF-8 text file from the project.",
    inputSchema: { type: "object", required: ["path"], properties: { path: { type: "string" } } }
  },
  async ({ input }) => {
    const data = await readFile(safeResolve(input.path), "utf8");
    return { content: [{ type: "text", text: data }] };
  }
);

mcp.tool(
  "list_paths",
  {
    description: "List project files (glob).",
    inputSchema: { type: "object", properties: { pattern: { type: "string", default: "**/*" }, limit: { type: "number", default: 200 } } }
  },
  async ({ input }) => {
    const files = await glob(input.pattern || "**/*", { cwd: PROJECT_ROOT, nodir: true });
    const out = files.slice(0, input.limit ?? 200);
    return { content: [{ type: "text", text: JSON.stringify({ root: PROJECT_ROOT, count: files.length, files: out }, null, 2) }] };
  }
);

// connect stdio
(async () => {
  const transport = new StdioServerTransport();
  await mcp.connect(transport);
  console.error(`[MCP] web-mcp (stdio) running at ${PROJECT_ROOT}`);
})().catch(err => console.error(err));

// ----- HTTP wrapper for curl checks -----
const app = express();
app.get("/health", (_req, res) => res.json({ status: "ok", projectRoot: PROJECT_ROOT }));
app.get("/context", async (_req, res) => {
  const files = await glob("**/*", { cwd: PROJECT_ROOT, nodir: true, dot: false });
  res.json({ count: files.length, files: files.slice(0, 500) });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.error(`[HTTP] listening on http://localhost:${PORT}`));
