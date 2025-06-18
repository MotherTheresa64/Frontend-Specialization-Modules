import React, { useState } from 'react';

interface MyComponentState {
  count: number | null;
}

const StateCounter: React.FC = () => {
  const [state1, setState1] = useState<MyComponentState>({ count: null });
  const [state2, setState2] = useState<MyComponentState>({ count: 0 } as MyComponentState);

  const incrementCount1 = () => {
    setState1((prevState) => ({
      ...prevState,
      count: (prevState.count || 0) + 1,
    }));
  };

  const incrementCount2 = () => {
    setState2((prevState) => ({
      ...prevState,
      count: (prevState.count || 0) + 1,
    }));
  };

  return (
    <div>
      <p>Count in State 1: {state1.count === null ? 'null' : state1.count}</p>
      <button onClick={incrementCount1}>Increment State 1</button>
      <p>Count in State 2: {state2.count}</p>
      <button onClick={incrementCount2}>Increment State 2</button>
    </div>
  );
};

export default StateCounter;
