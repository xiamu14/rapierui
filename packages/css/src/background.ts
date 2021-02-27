import { Image } from './types/background';
export default function background(attributes: string) {
  if (typeof attributes === "string") {
    return `background: ${attributes};`;
  }
}

export function backgroundImage(attributes: string | Image) {
    if (typeof attributes === "string") {
        return `background-image: ${attributes};`;
      } else {
          
      }

}