import { getContactImg } from "../utils/getContactImg";

export function ContactImage({ avatar, size }) {
  const imageUrl = getContactImg(avatar);

  return <img src={imageUrl} alt="contact" className={`contact-image ${size}`} />;
}
