"use client";

import {
  ChevronLeft,
  ChevronRight,
  Handbag,
  Search,
  User,
  X,
  Menu,
} from "lucide-react";
import { useEffect, useState, useCallback, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar(): ReactElement {
  const messages: string[] = [
    "11% Extra Discount Live If You Order Recommended Pack",
    "5% GST added due to Finance Bill 2025-26 by Govt. of Pakistan",
    "Free Delivery on Orders Above Rs. 5000",
  ];

  const [index, setIndex] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const prev = useCallback((): void => {
    setIndex((i: number) => (i === 0 ? messages.length - 1 : i - 1));
  }, [messages.length]);

  const next = useCallback((): void => {
    setIndex((i: number) =>
      i === messages.length - 1 ? 0 : i + 1
    );
  }, [messages.length]);

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, [pause, next]);

  return (
    <nav className="w-full shadow-md relative">
      {/* Top Notice Bar */}
      <div
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        className="cursor-pointer bg-blue-900 text-xs md:text-sm flex items-center justify-between px-3 h-8 text-white gap-2 overflow-hidden"
      >
        <button onClick={prev}>
          <ChevronLeft className="w-5 h-5 shrink-0" />
        </button>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="truncate font-bold text-center flex-1"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>

        <button onClick={next}>
          <ChevronRight className="w-5 h-5 shrink-0" />
        </button>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Brand Logo"
            className="h-8 w-8 md:h-10 md:w-10 object-cover rounded"
          />
          <span className="font-bold text-lg">MyStore</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">
            <li className="cursor-pointer hover:text-blue-700">Home</li>
          </Link>
          <Link href="/shop">
            <li className="cursor-pointer hover:text-blue-700">Shop</li>
          </Link>
          <Link href="/explore">
            <li className="cursor-pointer hover:text-blue-700">Explore</li>
          </Link>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-5 relative">
          {/* Search */}
          <button
            onClick={() => setShowSearch((v) => !v)}
            className="hover:text-blue-700"
          >
            <Search />
          </button>

          {/* Search Dropdown */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 bg-white border rounded-2xl shadow flex gap-2 p-2 w-56 md:w-64"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2 py-1 rounded outline-none border w-full"
                  autoFocus
                />
                <button onClick={() => setShowSearch(false)}>
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* User */}
          <button className="hover:text-blue-700 hidden sm:block">
            <User />
          </button>

          {/* Cart */}
          <button className="hover:text-blue-700 relative">
            <Handbag />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-inner"
          >
            <ul className="flex flex-col p-4 gap-4 font-medium">
              <Link href="/" onClick={() => setMobileMenu(false)}>
                <li className="hover:text-blue-700">Home</li>
              </Link>
              <Link href="/shop" onClick={() => setMobileMenu(false)}>
                <li className="hover:text-blue-700">Shop</li>
              </Link>
              <Link href="/explore" onClick={() => setMobileMenu(false)}>
                <li className="hover:text-blue-700">Explore</li>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
