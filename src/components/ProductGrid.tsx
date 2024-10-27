import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';

export default function ProductGrid({ 
  products,
  onAddToCart
}: {
  products: Product[];
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}