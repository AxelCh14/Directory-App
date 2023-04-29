/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../components/CardStyle.css"

export function Card({ user }) {
  return (
    <Link to={`/Details/${user.id}`} className="card-link">
      <div className="card contact-card">
        <img
          className="avatar contact-image"
          src={user.avatar}
          alt={user.name}
          width={200}
          height={200}
        />
        <div className="contact-info">{user.name}</div>
      </div>
    </Link>
  );
}