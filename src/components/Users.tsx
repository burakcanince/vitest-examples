import { useEffect, useState } from 'react';

type User = {
  name: string;
  email: string;
}

export function Users({ userId }: { userId: number }) {
  const [users, setUsers] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [userId]);

  if (!users) return null;

  return (
    <div>
      <p>{users.name}</p>
      <p>{users.email}</p>
    </div>
  );
}
