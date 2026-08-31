import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:px-8 lg:py-15">

        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            🔥 New Collection 2026
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Find Everything
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              You Love.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg lg:mx-0">
            Discover quality products, amazing deals and the latest trends
            all in one place. Start shopping today.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <Link
              to="/products"
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-500"
            >
              Shop Now →
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-gray-700 bg-gray-900 px-7 py-3.5 font-semibold text-gray-200 transition duration-300 hover:bg-gray-800"
            >
              Learn More
            </Link>

          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-800 pt-8">

            <div>
              <h3 className="text-xl font-bold">500+</h3>
              <p className="mt-1 text-sm text-gray-500">
                Products
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">10K+</h3>
              <p className="mt-1 text-sm text-gray-500">
                Customers
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">4.9/5</h3>
              <p className="mt-1 text-sm text-gray-500">
                Rating
              </p>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2">

          <div className="relative w-full max-w-lg">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl"></div>

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-3 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Shopping Store"
                className="h-[350px] w-full rounded-2xl object-cover sm:h-[450px]"
              />

              {/* Floating Card */}
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-gray-700 bg-gray-950/90 p-4 backdrop-blur-md">

                <div>
                  <p className="text-xs text-gray-500">
                    Special Offer
                  </p>

                  <h3 className="mt-1 font-bold">
                    Up to 50% OFF
                  </h3>
                </div>

                <Link
                  to="/products"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
                >
                  Explore
                </Link>

              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;