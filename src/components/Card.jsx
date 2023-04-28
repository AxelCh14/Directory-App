/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export function Card({ user }) {
  return (
    <div className="card">
      <Link to={'/Details/'+user.id}>
        <img
          className="avatar"
          src={user.avatar}
          alt={user.name}
          width={200}
          height={200}
        />
      </Link>
      <div>{user.name}</div>
      <div>{user.phone}</div>
      <div>{user.email}</div>
    </div>
  );
}
