import { useEffect, useState } from 'react';
import { getUser } from '../services/api';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await getUser(1);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Welcome</h1>
      {user && (
        <div>
          <p>User: {user.login}</p>
          <p>Name: {user.name}</p>
          <p>Bio: {user.bio}</p>
        </div>
      )}
    </div>
  );
}
