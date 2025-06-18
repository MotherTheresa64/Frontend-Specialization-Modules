import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';
import { fetchCounter } from './redux/asyncActions';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const loading = useSelector((state: RootState) => state.counter.loading);
  const error = useSelector((state: RootState) => state.counter.error);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Count: {count}</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(fetchCounter())}>Fetch Count from API</button>
    </div>
  );
};

export default Counter;
