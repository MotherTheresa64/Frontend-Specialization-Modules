import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from '../api/fakestore';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

const Home = () => {
  const [category, setCategory] = useState<string>('all');

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const productQueryKey = category === 'all' ? ['products'] : ['products', category];
  const productQueryFn =
    category === 'all' ? fetchProducts : () => fetchProductsByCategory(category);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: productQueryKey,
    queryFn: productQueryFn,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-screen-xl mx-auto">


        <h1 className="text-3xl font-bold mb-6 text-center">🛍️ Products</h1>

        {/* Category Dropdown */}
        <div className="flex justify-center mb-8">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 text-black rounded p-2"
          >
            <option value="all">All Categories</option>
            {categories.map((cat: string) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <p className="text-center">Loading products...</p>
        ) : isError ? (
          <p className="text-center text-red-400">Failed to load products.</p>
        ) : (
          <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
