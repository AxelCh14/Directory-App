/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export function Card({ user }) {
  return (
    <Link to={`/Details/${user.id}`} className="card-link">
      <div className="card">
        <img
          className="avatar"
          src={user.avatar}
          alt={user.name}
          width={200}
          height={200}
        />
        <div>{user.name}</div>
      </div>
    </Link>
  );
}