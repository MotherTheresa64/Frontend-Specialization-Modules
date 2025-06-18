import Posts from './Posts';
import AddPostForm from './AddPostForm';
import UserPosts from './UserPosts';

import { useState } from 'react';

const App = () => {
  const [userId, setUserId] = useState<number>(1);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Query Demo</h1>

      <section>
        <h2>📫 All Posts</h2>
        <Posts />
      </section>

      <section>
        <h2>➕ Add New Post</h2>
        <AddPostForm />
      </section>

      <section>
        <h2>👤 User Posts</h2>
        <label htmlFor="userId">Enter User ID:</label>
        <input
          id="userId"
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
        <UserPosts userId={userId} />
      </section>
    </div>
  );
};

export default App;
