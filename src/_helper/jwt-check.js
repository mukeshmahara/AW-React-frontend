export function jwtCheck() {
  let token;

  try {
    token = JSON.parse(localStorage.getItem("token"));
  } catch (error) {
    token = null;
  }
  
  if (token) {
    return token;
  } else {
    return false;
  }
}

export const setToken = (accessToken, refreshToken, role) => {
  localStorage.setItem("token", JSON.stringify(accessToken));
  
  // localStorage.setItem("role", JSON.stringify(role));
  // localStorage.setItem('userRefresh', JSON.stringify(refreshToken));
};
