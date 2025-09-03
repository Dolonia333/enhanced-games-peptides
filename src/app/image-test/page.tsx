export default function ImageTest() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Image Test Page</h1>
      <div className="space-y-4">
        <div>
          <h2>hero.jpg:</h2>
          <img src="/images/hero.jpg" alt="Hero" width={400} height={300} />
        </div>
        <div>
          <h2>eh-games-new-hero.jpg:</h2>
          <img src="/images/eh-games-new-hero.jpg" alt="New Hero" width={400} height={300} />
        </div>
        <div>
          <h2>peptide-delivery-kit-hero.jpg:</h2>
          <img src="/images/peptide-delivery-kit-hero.jpg" alt="Delivery Kit" width={400} height={300} />
        </div>
      </div>
    </div>
  );
}
