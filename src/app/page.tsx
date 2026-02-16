"use client";

import { ReactElement } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home(): ReactElement {
  const heroVideo = "6poXJc4rU8U";

  const featuredProduct = {
    name: "MAD Professional Teeth Whitening Kit",
    price: "Rs. 4,999",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    description:
      "Clinically tested whitening formula designed for safe enamel protection and visible results in just 7 days.",
  };

  const Block = () => (
    <div className="flex flex-col leading-tight mr-10 text-sm md:text-base">
      <span>1 Million+ Happy Customers 👥</span>
      <span>USA-developed formulation 🇺🇸</span>
    </div>
  );

  return (
    <main className="w-full overflow-hidden">

      {/* 🔹 HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={`https://www.youtube.com/embed/${heroVideo}?autoplay=1&mute=1&loop=1&playlist=${heroVideo}&controls=0`}
          title="Dental Product Video"
          allow="autoplay; fullscreen"
          allowFullScreen
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Professional Whitening at Home
          </motion.h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-6">
            Dentist-approved teeth whitening solutions for a brighter,
            confident smile.
          </p>

          <Link href="/shop">
            <button className="bg-blue-900 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 FEATURED PRODUCT */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <img
            src={featuredProduct.image}
            alt={featuredProduct.name}
            className="w-full md:w-1/2 h-75 md:h-112.5 object-cover rounded-3xl shadow-xl"
          />

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              {featuredProduct.name}
            </h2>

            <p className="text-gray-600 mb-6">
              {featuredProduct.description}
            </p>

            <p className="text-2xl font-bold text-blue-900 mb-6">
              {featuredProduct.price}
            </p>

            <Link href="/shop">
              <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 BEFORE / AFTER */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Real Results in 7 Days
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
            alt="Before"
            className="rounded-2xl shadow-lg h-75 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
            alt="After"
            className="rounded-2xl shadow-lg h-75 w-full object-cover"
          />
        </div>
      </section>

      {/* 🔹 VIDEO GALLERY */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          See It In Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["6poXJc4rU8U", "yeMebt7ATus", "6poXJc4rU8U"].map((id, i) => (
            <div
              key={i}
              className="relative w-full h-55 md:h-62.5 overflow-hidden rounded-2xl shadow-lg"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${id}?mute=1`}
                title={`Video ${i}`}
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 TRUST BADGES */}
      <section className="py-12 bg-blue-900 text-white text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold">1M+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Dentist</h3>
            <p>Approved</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">7 Days</h3>
            <p>Visible Results</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Money Back</h3>
            <p>Guarantee</p>
          </div>
        </div>
      </section>

      {/* 🔹 REVIEWS */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Amazing results in just one week!",
            "Best whitening kit I’ve ever used.",
            "Highly recommended by my dentist!",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <p>"{text}"</p>
              <div className="mt-4 text-blue-900 font-semibold">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 SOCIAL GRID */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Smile Transformations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Smile"
              className="rounded-xl h-37.5 md:h-50 w-full object-cover"
            />
          ))}
        </div>
      </section>

    </main>
  );
}
