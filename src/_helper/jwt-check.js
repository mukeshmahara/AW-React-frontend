export function jwtCheck() {
  let user;

  try {
    user = JSON.parse(localStorage.getItem('jwt_token'));
  } catch (error) {
    user = null;
  }
  if (user && user.token) {
    return user.token;
  } else {
    return false;
  }
}

export const setToken = (accessToken, refreshToken, role) => {
  localStorage.setItem('jwt_token', JSON.stringify(accessToken));
};
