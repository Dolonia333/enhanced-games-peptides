#!/usr/bin/env node
const path = require("node:path");
const fs = require("node:fs/promises");
const { glob } = require("glob");
const express = require("express");

const { Server } = require("@modelcontextprotocol/sdk/server/server");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio");

const PROJECT_ROOT = path.resolve(process.env.PROJECT_ROOT || process.cwd());

function safeResolve(p) {
  const full = path.resolve(PROJECT_ROOT, p);
  if (!full.startsWith(PROJECT_ROOT)) throw new Error("Path escapes project root.");
  return full;
}

const server = new Server(
  { name: "web-mcp", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

server.tool(
  "read_text",
  {
    description: "Read a UTF-8 text file from the project.",
    inputSchema: { type: "object", required: ["path"], properties: { path: { type: "string" } } }
  },
  async ({ input }) => {
    const full = safeResolve(input.path);
    const data = await fs.readFile(full, "utf8");
    return { content: [{ type: "text", text: data }] };
  }
);

server.tool(
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

(async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`[MCP] web-mcp (stdio) running at ${PROJECT_ROOT}`);
})().catch(e => console.error(e));

// ---- HTTP wrapper so your curl checks work on :4000 ----
const app = express();
app.get("/health", (_req, res) => res.json({ status: "ok", projectRoot: PROJECT_ROOT }));
app.get("/context", async (_req, res) => {
  const files = await glob("**/*", { cwd: PROJECT_ROOT, nodir: true, dot: false });
  res.json({ count: files.length, files: files.slice(0, 500) });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.error(`[HTTP] listening on http://localhost:${PORT}`));
