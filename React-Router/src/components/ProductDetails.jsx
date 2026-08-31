import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      category: "Audio",
      price: 59.99,
      rating: 4.8,
      reviews: 124,
      stock: 18,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Experience crystal-clear sound with these premium wireless headphones. Designed for comfort, long listening sessions and powerful audio performance.",
      features: [
        "Wireless Bluetooth connectivity",
        "Up to 30 hours battery life",
        "Comfortable over-ear design",
        "Built-in microphone",
      ],
    },

    {
      id: 2,
      title: "Smart Watch",
      category: "Wearables",
      price: 89.99,
      rating: 4.6,
      reviews: 98,
      stock: 12,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description:
        "Stay connected and track your daily activities with this stylish smart watch. Perfect for fitness, notifications and everyday use.",
      features: [
        "Heart rate monitoring",
        "Activity tracking",
        "Water resistant",
        "Long-lasting battery",
      ],
    },

    {
      id: 3,
      title: "Running Shoes",
      category: "Footwear",
      price: 74.99,
      rating: 4.7,
      reviews: 156,
      stock: 24,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description:
        "Lightweight and comfortable running shoes designed to provide excellent support and cushioning during your daily workouts.",
      features: [
        "Lightweight construction",
        "Breathable material",
        "Cushioned sole",
        "Durable rubber outsole",
      ],
    },

    {
      id: 4,
      title: "Leather Backpack",
      category: "Accessories",
      price: 49.99,
      rating: 4.5,
      reviews: 87,
      stock: 15,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      description:
        "A stylish and durable leather backpack with enough space for your everyday essentials, laptop and accessories.",
      features: [
        "Premium leather material",
        "Laptop compartment",
        "Multiple storage pockets",
        "Adjustable shoulder straps",
      ],
    },

    {
      id: 5,
      title: "Minimal Chair",
      category: "Furniture",
      price: 129.99,
      rating: 4.4,
      reviews: 72,
      stock: 8,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
      description:
        "Modern minimalist chair designed to bring comfort and style to your home or office workspace.",
      features: [
        "Modern minimalist design",
        "Comfortable seating",
        "Strong wooden frame",
        "Easy to clean",
      ],
    },

    {
      id: 6,
      title: "Mechanical Keyboard",
      category: "Electronics",
      price: 79.99,
      rating: 4.9,
      reviews: 214,
      stock: 20,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      description:
        "A responsive mechanical keyboard built for developers, gamers and anyone who loves a satisfying typing experience.",
      features: [
        "Mechanical switches",
        "RGB backlighting",
        "Durable keycaps",
        "USB-C connectivity",
      ],
    },

    {
      id: 7,
      title: "Gaming Mouse",
      category: "Electronics",
      price: 39.99,
      rating: 4.7,
      reviews: 189,
      stock: 30,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      description:
        "High-performance gaming mouse with accurate tracking and an ergonomic design for long gaming sessions.",
      features: [
        "High precision sensor",
        "Ergonomic design",
        "Programmable buttons",
        "Adjustable DPI",
      ],
    },

    {
      id: 8,
      title: "Classic Sunglasses",
      category: "Accessories",
      price: 34.99,
      rating: 4.3,
      reviews: 65,
      stock: 22,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      description:
        "Classic sunglasses combining timeless style with comfortable frames for everyday outdoor use.",
      features: [
        "UV protection",
        "Lightweight frame",
        "Classic design",
        "Scratch-resistant lenses",
      ],
    },

    {
      id: 9,
      title: "Denim Jacket",
      category: "Fashion",
      price: 64.99,
      rating: 4.6,
      reviews: 103,
      stock: 14,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      description:
        "A classic denim jacket that works perfectly with casual outfits and everyday fashion.",
      features: [
        "Premium denim",
        "Classic fit",
        "Multiple pockets",
        "Durable stitching",
      ],
    },

    {
      id: 10,
      title: "Running Backpack",
      category: "Sports",
      price: 44.99,
      rating: 4.5,
      reviews: 91,
      stock: 17,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      description:
        "A lightweight sports backpack designed for running, hiking and outdoor adventures.",
      features: [
        "Lightweight design",
        "Water-resistant material",
        "Breathable straps",
        "Multiple compartments",
      ],
    },
  ];

  // Find product according to URL id
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // If product doesn't exist
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            404
          </h1>

          <p className="mt-3 text-gray-400">
            Product not found.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-12 text-white lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-3">
            <img
              src={product.image}
              alt={product.title}
              className="h-[400px] w-full rounded-2xl object-cover sm:h-[500px]"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="w-fit rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-yellow-400">
                ★ {product.rating}
              </span>

              <span className="text-sm text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-3xl font-bold text-blue-400">
              ${product.price}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl leading-7 text-gray-400">
              {product.description}
            </p>

            {/* Stock */}
            <div className="mt-6">
              {product.stock > 0 ? (
                <p className="text-sm text-green-400">
                  ✓ {product.stock} items available
                </p>
              ) : (
                <p className="text-sm text-red-400">
                  Out of stock
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold transition hover:bg-blue-500">
                Add to Cart
              </button>

              <button className="rounded-xl border border-gray-700 bg-gray-900 px-8 py-3.5 font-semibold transition hover:bg-gray-800">
                Buy Now
              </button>

            </div>

          </div>
        </div>

        {/* Features */}
        <div className="mt-16 border-t border-gray-800 pt-10">

          <h2 className="text-2xl font-bold">
            Product Features
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {product.features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900 p-5"
              >
                <span className="text-blue-400">
                  ✓
                </span>

                <p className="mt-2 text-sm text-gray-300">
                  {feature}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;