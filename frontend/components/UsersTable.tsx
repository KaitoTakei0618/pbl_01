
'use client';

import { User, fetchUsers } from '@/lib/users';
import { useState } from 'react';

export default function UsersTable({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const updatedUsers = await fetchUsers('no-store');
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? '更新中...' : '更新'}
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>Email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


