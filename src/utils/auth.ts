import jwt from "jwt-decode";

const fetchToken = (token: string) => {
  const payloadToken: {
    id: string;
    userName: string;
    iat: number;
  } = jwt(token);

  const user = {
    token: token,
    id: payloadToken.id,
    userName: payloadToken.userName,
  };

  return user;
};

// user.id = payloadToken.id;
// user.userName = payloadToken.userName;
// console.log(user);

export default fetchToken;
