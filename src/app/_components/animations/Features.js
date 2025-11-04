// components/Features.js
export default function Features() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Features</h2>
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 border rounded-lg">🚀 Fast</div>
        <div className="p-6 border rounded-lg">📱 Responsive</div>
        <div className="p-6 border rounded-lg">🔍 SEO Friendly</div>
      </div>
    </section>
  );
}
