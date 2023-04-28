import placeholder from '../img/3973421.png'
export function getContactImg(path, width) {
    return path ? `${IMG_API}?width=${String(width)}&path=${path}` : placeholder;
  }