import { Cookies } from "../types/Cookies";

// actually 2147483647 = 2^31 - 1
export const cookiesMaxExpirationDate = new Date(2147483647 * 1000);

export const getCookie = (name: Cookies) => {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || ""
  );
};
