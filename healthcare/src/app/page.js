export default function Home() {
  return (
    <main className="relative bg-blue-600 min-h-screen">
      {/* White Card Overlapping Blue */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 bg-white rounded-2xl shadow-xl -mt-40">
        {/* Navigation */}
        <header className="flex justify-between items-center mb-12">
          <nav className="flex gap-6 text-sm font-medium text-gray-700">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Industries</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
          </nav>
          <div className="flex gap-4">
            <button className="text-blue-600 font-semibold">Log In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign Up</button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Text */}
          <div className="flex-1 z-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              AI for Physiotherapists
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A virtual assistant that books, reminds, and records, while you focus on your patients.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 relative z-0">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/physio-image.png"
                alt="Physiotherapist"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">30%</p>
            <p className="text-gray-600 mt-2">Reduction in admin time</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">98%</p>
            <p className="text-gray-600 mt-2">Patient satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">25%</p>
            <p className="text-gray-600 mt-2">Boost in retention</p>
          </div>
        </div>
      </section>
    </main>
  );
}
