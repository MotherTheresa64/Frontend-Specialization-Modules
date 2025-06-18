import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../features/cart/cartSelectors';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="border rounded p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
