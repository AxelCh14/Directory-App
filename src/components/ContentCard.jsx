import { useState, useEffect } from 'react';
import { get } from '../data/httpClient';
import { Card } from './Card';
import { AddUserForm } from './AddUserForm';
import "../components/Contentcardstyle.css"

export function ContentCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get('/').then((users) => {
      setUsers(users);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <>
      <ul className='container'>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
      <AddUserForm onAdd={handleAddUser} />

    </>
  );
}
