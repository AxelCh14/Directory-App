import placeholder from "../img/3973421.png";

const IMG_API = "https://joesch.moe/api/v1/random";

export function getContactImg(userId) {
  return userId ? `${IMG_API}?=${userId}` : placeholder;
}
