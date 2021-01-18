import Cookies from 'js-cookie';

export function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}

export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    role: Cookies.get('role'),
    appkey: Cookies.get('appkey'),
    email: Cookies.get('email'),
  };
}

export function removeUserCookie() {
  Cookies.remove('usernmae');
  Cookies.remove('role');
  Cookies.remove('appkey');
  Cookies.remove('email');
  return true;
}
