import React, { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, logout } = useLogin();

  const userState = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    id: "",
    token: "",
  });

  const handleClick = async () => {
    login(formData);
  };

  // Para tornar el form reactivo tengo que pasar un evento al form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogout = () => {
    logout();
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    login(formData);
  };

  if (!userState.id) {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {/* en los names de los inputs se debe poner igual que las propriedades que hemos creado en la interfaz */}
            <input
              type="text"
              name="userName"
              placeholder="Username"
              required
              autoComplete="off"
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleClick}>Login</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h2>Hola {userState.userName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }
};

export default Login;
