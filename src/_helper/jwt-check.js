export function jwtCheck() {
  let user;

  try {
    user = JSON.parse(localStorage.getItem('user'));
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
  localStorage.setItem('user', JSON.stringify(accessToken));
  localStorage.setItem('userRefresh', JSON.stringify(refreshToken));
  localStorage.setItem('cdmin_role', JSON.stringify(role));
};
