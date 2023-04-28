import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getContactImg } from "../utils/getContactImg";
import { useSpring, animated } from "react-spring";
import "../components/Buttons.css";

import "../components/ContactDetails.css";

export function ContactDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [alias, setAlias] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    get()
      .then((users) => {
        const foundUser = users.find((user) => user.id === Number(userId));
        setUser(foundUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  const handleAliasChange = () => {
    setUser({ ...user, name: `${user.name} (${alias})` });
    setAlias("");
    setShowInput(false);
  };

  const inputAnimation = useSpring({
    width: showInput ? "100%" : "0%",
    opacity: showInput ? 1 : 0,
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  const imageUrl = getContactImg(user.avatar, 200);

  return (
    <div className="contact-card">
      <img src={imageUrl} alt={user.name} className="contact-image" />
      <div className="contact-info">
        <p>
          <strong>Name: </strong>
          {user.name}
        </p>
        <p>
          <strong>Phone: </strong>
          {user.phone}
        </p>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>

        <div>
          <button className="button" onClick={() => setShowInput(true)}>
            Add Alias
          </button>
          <animated.input
            type="text"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            placeholder="Alias"
            style={inputAnimation}
          />
          {showInput && (
            <button className="button" onClick={handleAliasChange}>
              Save Alias
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
