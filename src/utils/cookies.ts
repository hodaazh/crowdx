interface ICookieType {
  setCookie: (name: string, value: string, days: number) => void;
  getCookie: (name: string) => string | null;
  deleteCookie: (name: string) => void;
}

class Cookies implements ICookieType {
  setCookie(name: string, value: string, days: number = 30) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  getCookie(name: string): string | null {
    const nameLenPlus = name.length + 1;
    if (typeof document !== 'undefined') {
      return (
        document.cookie
          .split(';')
          .map((i) => i.trim())
          .filter((cookie) => {
            return cookie.substring(0, nameLenPlus) === `${name}=`;
          })
          .map((cookie) => {
            return decodeURIComponent(cookie.substring(nameLenPlus));
          })[0] || null
      );
    }
    return null;
  }

  deleteCookie(name: string) {
    const date = new Date();
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=; expires=${date.toUTCString()}; path=/`;
  }
}

const cookies = new Cookies();
export { cookies };
