export const USER_TYPE = "&type";
export const USER_TOKEN = "&token";

const auth = {
  login(token, userType) {
    localStorage.setItem(USER_TOKEN, token);
    localStorage.setItem(USER_TYPE, userType);
  },
  token() {
    return {
      Authorization: `Bearer ${localStorage.getItem(USER_TOKEN)}`,
    };
  },
  type() {
    return localStorage.getItem(USER_TYPE);
  },
  logout() {
    localStorage.clear();
  },
};
export default auth;
