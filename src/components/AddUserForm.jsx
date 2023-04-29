import { useState } from 'react';
import { post } from '../data/httpClient';

export function AddUserForm({ onAdd }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name,
      phone,
      email,
    };

    post(newUser).then((data) => {
      onAdd(data);
      setName('');
      setPhone('');
      setEmail('');
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Phone:
        <input type='text' value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <label>
        Email:
        <input type='text' value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type='submit'>Add User</button>
    </form>
  );
}
