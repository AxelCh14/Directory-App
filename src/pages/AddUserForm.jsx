import { useState } from 'react';
import { post } from '../data/httpClient';
import "../components/AddFormStyle.css";

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
    <div className='card'>
      <div className='card-header'>
        <h3>Add User</h3>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Name:</label>
            <input
              type='text'
              className='form-control'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Phone:</label>
            <input
              type='text'
              className='form-control'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input
              type='text'
              className='form-control'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button type='submit' className='btn'>Add User</button>
        </form>
      </div>
    </div>
  );
}
