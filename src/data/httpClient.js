const API = 'https://jsonplaceholder.typicode.com/users';
const IMG_API = 'https://joesch.moe/api/v1/random';

export async function get() {
  try {
    const response = await fetch(API);
    const users = await response.json();
    const usersWithAvatars = users.map((user) => ({
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      avatar: `${IMG_API}?=${user.id}`,
    }));
    return usersWithAvatars;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching data from server');
  }
}

export async function post(user) {
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error adding user');
  }
}


