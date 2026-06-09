
// app/users/page.tsx

import UsersTable from '@/components/UsersTable';
import { fetchUsers } from '@/lib/users';

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users Table</h1>
      <UsersTable initialUsers={users} />
    </div>
  );
}

