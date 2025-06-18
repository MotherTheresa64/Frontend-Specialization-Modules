import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'Noah Ragan',
    email: 'noah@example.com',
  });

  const handleUpdate = () => {
    setUser({ ...user, name: 'Updated Name' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Hello, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
}

export default App;
