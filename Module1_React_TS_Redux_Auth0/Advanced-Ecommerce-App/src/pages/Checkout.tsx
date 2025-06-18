import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import Cart from '../components/Cart';

const Checkout = () => {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('✅ Checkout successful! Your cart has been cleared.');
  };

  return (
    <div className="p-4">
      <Cart />
      <button
        onClick={handleCheckout}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Complete Checkout
      </button>
    </div>
  );
};

export default Checkout;
