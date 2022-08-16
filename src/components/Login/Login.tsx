const Login = () => {
  const handleClick = async () => {
    const url = process.env.REACT_APP_APIURL as string;
    const mockUser = { username: "Buabua", password: "1234" };

    const data = await fetch(url + "/users/login", {
      method: "POST",
      body: JSON.stringify(mockUser),
      headers: {
        "content-type": "application/json",
      },
    });

    const { user } = await data.json();

    console.log(user.token);
    localStorage.setItem("token", user.token);
  };

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
