"use client";

import { ReactElement, useState } from "react";

export default function EmailSection(): ReactElement {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-14 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Stay Updated
        </h2>

        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Subscribe to receive special offers, updates, and the latest news from
          Mad Dental Care.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
          />

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}
