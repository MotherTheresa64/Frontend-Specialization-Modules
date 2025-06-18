import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/cart/cartSelectors';

const Header = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🛒 MyShop</Link>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/checkout">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
