import placeholder from "../img/3973421.png";

const AVATAR_API = "https://ui-avatars.com/api/";

export function getContactImg(name) {
  return name ? `${AVATAR_API}?name=${encodeURIComponent(name)}` : placeholder;
}
