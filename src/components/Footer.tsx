"use client";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { ReactElement, useState } from "react";

export default function Footer(): ReactElement {
  const [showModel, setShowModel] = useState<boolean>(false);

  return (
    <footer className="bg-blue-900 text-gray-300 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative">

        {/* Left Text */}
        <div className="text-xs sm:text-sm text-center md:text-left">
          © 2026 Mad Dental Care, Powered by Shopify
        </div>

        {/* Terms */}
        <div
          className="relative text-xs sm:text-sm hover:text-white cursor-pointer transition"
          onMouseEnter={() => setShowModel(true)}
          onMouseLeave={() => setShowModel(false)}
        >
          Terms and Policy

          {showModel && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 sm:w-72 bg-white text-black p-4 rounded-xl shadow-2xl text-xs z-50">
              <h4 className="font-semibold mb-2">Terms & Privacy</h4>
              <p>
                By using our services, you agree to our terms and privacy
                policies. We ensure data protection and customer satisfaction.
              </p>
            </div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-white transition cursor-pointer" />
          <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-white transition cursor-pointer" />
          <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-white transition cursor-pointer" />
        </div>

      </div>
    </footer>
  );
}
