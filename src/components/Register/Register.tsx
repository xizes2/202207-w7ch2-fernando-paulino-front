import React, { SyntheticEvent, useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Register = (): JSX.Element => {
  // const { login, logout } = useLogin();
  const { register } = useLogin();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    image: "",
  });

  // const handleSubmit = async (event: SyntheticEvent) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   register(formData);
  // };

  // Para tornar el form reactivo tengo que pasar un evento a los campos del form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   formData.append("image", event.target.files![0]);
  //   setUserData({
  //     ...userData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={() => {}}></form>
      <div>
        {/* en los names de los inputs se debe poner igual que las propriedades que hemos creado en la interfaz */}
        <input
          type="text"
          name="userName"
          placeholder="Username"
          required
          autoComplete="off"
          value={userData.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoComplete="off"
          value={userData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="User image"
          autoComplete="off"
          value={userData.image}
          onChange={handleChange}
        />
        or input your image file
        <input
          type="file"
          name="image"
          placeholder="Select an image"
          value={userData.image}
          onChange={() => {}}
        />
      </div>
      <button onClick={() => {}}>Register</button>
    </>
  );
};

export default Register;
