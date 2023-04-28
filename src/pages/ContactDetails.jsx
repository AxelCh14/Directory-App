import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getContactImg } from "../utils/getContactImg";

export function ContactDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    get().then((users) => {
      const foundUser = users.find((user) => user.id === Number(userId));
      setUser(foundUser);
    }).catch((error) => {
      console.error(error);
    });
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const imageUrl = getContactImg(user.avatar, 200);

  return (
    <div>
      <img src={imageUrl} alt={user.name} />
      <div>
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
      </div>
    </div>
  );
}
