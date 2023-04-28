import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/users';
const IMG_API = 'https://joesch.moe/api/v1/random';

export async function get(path) {
  try {
    const response = await axios.get(API + path);
    const users = response.data.map((user) => {
      return { id: user.id, name: user.name, phone: user.phone, email: user.email, avatar: `${IMG_API}?=${user.id}` };
});
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching data from server');
  }
}