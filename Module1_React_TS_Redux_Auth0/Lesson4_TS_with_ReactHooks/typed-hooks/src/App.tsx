import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import StateCounter from './components/StateCounter';
import ItemComponent from './components/ItemComponent';
import ThemeContext from './components/ThemeContext';
import ThemeConsumer from './components/ThemeConsumer';
import { Container } from 'react-bootstrap';
import CounterCallbackComponent from './components/CounterCallbackComponent';
import Exercise1 from './components/Exercise1';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [theme, setTheme] = useState<string>('light');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Container className="py-5 text-center">
          <h2>Lesson 4: TS + React Hooks</h2>
          <hr />

          <h5>useState (with and without type assertion)</h5>
          <StateCounter />

          <h5 className="mt-4">useReducer: Item List</h5>
          <ItemComponent />

          <h5 className="mt-4">useContext: Theme Toggle</h5>
          <ThemeConsumer />

          <h5 className="mt-4">Callbacks: Increment / Decrement</h5>
          <p>Count: {count}</p>
          <CounterCallbackComponent onIncrement={handleIncrement} onDecrement={handleDecrement} />

          <h5 className="mt-4">Exercise 1: Multiply Counter</h5>
          <Exercise1 />

          <h5 className="mt-4">Exercise 2: Shopping Cart</h5>
          <ShoppingCart />
        </Container>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
