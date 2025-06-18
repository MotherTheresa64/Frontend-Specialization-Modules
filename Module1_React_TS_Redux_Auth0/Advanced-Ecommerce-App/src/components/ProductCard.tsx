import type { Product } from '../types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded shadow p-3 flex flex-col items-center text-sm max-w-[250px] bg-white hover:shadow-md transition">
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-28 w-28 object-contain mb-2"
      />

      {/* Title */}
      <h2 className="font-semibold text-center line-clamp-2 mb-1">{product.title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-xs mb-1 line-clamp-2 text-center">
        {product.description}
      </p>

      {/* Meta */}
      <div className="text-xs text-gray-500 mb-1 text-center">
        <p>Category: {product.category}</p>
        <p>Rating: ⭐ {product.rating.rate} ({product.rating.count})</p>
      </div>

      {/* Price */}
      <p className="text-base font-bold mb-1">${product.price}</p>

      {/* Add to Cart */}
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
