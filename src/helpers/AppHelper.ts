import {twMerge} from "tailwind-merge";

type ClassValue = ClassArray | ClassDictionary | string | number | boolean | null | undefined;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

type ClassArray = Array<ClassValue>;

export default class AppHelper {
  static classes(...args: ClassValue[]): string {
    let className = "";
    for (const arg of args) {
      if (typeof arg === "string" || typeof arg === "number") {
        className += `${arg} `;
      } else if (typeof arg === "object") {
        if (Array.isArray(arg)) {
          for (const element of arg) {
            className += `${element} `;
          }
        } else {
          for (const key in arg) {
            if (arg[key]) {
              className += `${key} `;
            }
          }
        }
      }
    }

    return twMerge(className.trim());
  }

  static sliceName(name: string | undefined) {
    if (!name) {
      return "";
    }
    const nameArray = name.split(" ");
    return nameArray[0][0] + "." + nameArray[1];
  }
}
