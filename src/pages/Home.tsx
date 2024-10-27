import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl font-bold mb-4">Spring Collection 2024</h1>
              <p className="text-xl mb-8">Discover our latest arrivals and trending styles</p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Women's Fashion",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
          },
          {
            title: "Men's Collection",
            image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=800",
          },
          {
            title: "Accessories",
            image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800",
          },
        ].map((category, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden group">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-80 object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}