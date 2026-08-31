import React from "react";
import { Link } from "react-router-dom";

function Products() {

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      category: "Audio",
      price: 59.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 2,
      title: "Smart Watch",
      category: "Wearables",
      price: 89.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 3,
      title: "Running Shoes",
      category: "Footwear",
      price: 74.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 4,
      title: "Leather Backpack",
      category: "Accessories",
      price: 49.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 5,
      title: "Minimal Chair",
      category: "Furniture",
      price: 129.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    },
    {
      id: 6,
      title: "Mechanical Keyboard",
      category: "Electronics",
      price: 79.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
      id: 7,
      title: "Gaming Mouse",
      category: "Electronics",
      price: 39.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    },
    {
      id: 8,
      title: "Classic Sunglasses",
      category: "Accessories",
      price: 34.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
      id: 9,
      title: "Denim Jacket",
      category: "Fashion",
      price: 64.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    },
    {
      id: 10,
      title: "Running Backpack",
      category: "Sports",
      price: 44.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
    },
    {
      id: 11,
      title: "Smartphone",
      category: "Electronics",
      price: 699.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 12,
      title: "Coffee Maker",
      category: "Appliances",
      price: 99.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      id: 13,
      title: "Casual T-Shirt",
      category: "Fashion",
      price: 24.99,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 14,
      title: "Desk Lamp",
      category: "Home",
      price: 29.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    },
    {
      id: 15,
      title: "Bluetooth Speaker",
      category: "Audio",
      price: 54.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    },
    {
      id: 16,
      title: "Travel Watch",
      category: "Accessories",
      price: 119.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    },
    {
      id: 17,
      title: "Cotton Hoodie",
      category: "Fashion",
      price: 54.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },
    {
      id: 18,
      title: "Office Desk",
      category: "Furniture",
      price: 179.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164d1d4f",
    },
    {
      id: 19,
      title: "Fitness Bottle",
      category: "Sports",
      price: 19.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    },
    {
      id: 20,
      title: "Wireless Earbuds",
      category: "Audio",
      price: 69.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-12 lg:px-8">

      {/* Header */}
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            Our Collection
          </span>

          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Explore Our Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Discover our latest products, carefully selected for quality,
            style and everyday use.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-800">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-full bg-gray-950/80 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md">
                  {product.category}
                </span>

              </div>

              {/* Product Info */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <h2 className="font-semibold text-white">
                    {product.title}
                  </h2>

                  <span className="flex items-center gap-1 text-sm text-yellow-400">
                    ★ {product.rating}
                  </span>

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-xl font-bold text-white">
                    ${product.price}
                  </span>

                  <Link
                    to={`/products/${product.id}`}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    View
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;