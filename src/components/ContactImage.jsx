import { getContactImg } from "../utils/getContactImg";

export function ContactImage({ avatar, size }) {
  const imageUrl = getContactImg(avatar, size);

  return <img src={imageUrl} alt="contact" className="contact-image" />;
}
