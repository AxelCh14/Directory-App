import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getContactImg } from "../utils/getContactImg";
import placeholder from '../img/3973421.png';

export function ContactDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const imageUrl = getContactImg(user.path, 200);

  useEffect(() => {
    get(`/users/${userId}`).then((data) => {
      setUser(data);
    });
  }, [userId]);

  return (
    <div>
      <img src={imageUrl} alt={user.name} />
      <div>
        <p>
          <strong>Name: </strong>
          {user.name}
        </p>
      </div>
    </div>
  );
}
