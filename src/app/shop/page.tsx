"use client";

import { ReactElement } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Shop(): ReactElement {

  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: "Whitening Toothpaste",
      price: 1200,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
    },
    {
      id: 2,
      name: "Electric Toothbrush",
      price: 3500,
      image: "https://images.unsplash.com/photo-1606813909027-6b9d4bdfab33"
    },
    {
      id: 3,
      name: "Mouth Wash",
      price: 900,
      image: "https://images.unsplash.com/photo-1612886626695-4d0e3edc2f5b"
    },
    {
      id: 4,
      name: "Dental Care Kit",
      price: 2500,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                {product.name}
              </h3>

              <p className="text-blue-900 font-bold mb-4">
                Rs. {product.price}
              </p>

              <Link href='/cart'>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-900 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Add to Cart
              </button>
              </Link>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
