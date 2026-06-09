
// lib/users.ts

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const fetchUsers = async (cache?: RequestCache): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: cache ?? 'force-cache' });
  if (!response.ok) {
    // エラーハンドリングは必要に応じて詳細に記述する
    throw new Error('Failed to fetch users');
  }
  return response.json();
};



