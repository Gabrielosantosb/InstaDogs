export const API_URL = "https://dogsapi.origamid.dev/json";

export const TOKEN_POST = () => {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization :'Bearer ' + token
      },
    },
  };
};
