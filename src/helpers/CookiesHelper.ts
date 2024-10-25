import {
  deleteCookie as deleteCookieFn,
  getCookie as getCookieFn,
  getCookies as getCookiesFn,
  hasCookie as hasCookieFn,
  setCookie as setCookieFn,
} from "cookies-next";

import {OptionsType} from "cookies-next/lib/types";

export type CookieOptions = OptionsType;

export default class CookiesHelper {
  // get cookie
  static getCookie(key: string, options: CookieOptions = {}): any {
    return getCookieFn(key, options);
  }

  static getCookies(options: CookieOptions = {}): any {
    return getCookiesFn(options);
  }

  // set cookie
  static setCookie(key: string, data: any, options: CookieOptions = {}): void {
    setCookieFn(key, data, options);
  }

  // has cookie
  static hasCookie(key: string, options: CookieOptions = {}): boolean {
    return hasCookieFn(key, options);
  }

  // delete cookie
  static deleteCookie(key: string, options: CookieOptions = {}): void {
    deleteCookieFn(key, options);
  }
}
