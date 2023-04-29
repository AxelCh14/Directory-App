import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { ContactImage } from "../components/ContactImage";
import { ContactInfoItem } from "../components/ContactInfoItem";
import { ContactAlias } from "../components/ContactAlias";
import { Loading } from "../components/Loading";

import "../components/Buttons.css";
import "../components/CardStyle.css";

export function ContactDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

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

  const handleSaveAlias = (newUser) => {
    setUser(newUser);
  };

  if (!user) {
    return <Loading message="Loading..." />;
  }

  return (
    <div className="contact-card">
      <ContactImage avatar={user.avatar} size={200} />
      <div className="contact-info">
        <ContactInfoItem label="Name" value={user.name} />
        <ContactInfoItem label="Phone" value={user.phone} />
        <ContactInfoItem label="Email" value={user.email} />
        <ContactAlias user={user} onSave={handleSaveAlias} />
      </div>
    </div>
  );
}
