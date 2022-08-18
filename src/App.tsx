import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import "./App.css";
import Login from "./components/Login/Login";
import RobotsList from "./components/RobotList/RobotsList";
import RobotsForm from "./components/robotsForm/RobotsForm";
import { UserRegistered } from "./features/users/model/User";
import { loginUserActionCreator } from "./features/users/usersSlice";
import fetchToken from "./utils/auth";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (token) {
    const user = fetchToken(token);
    dispatch<PayloadAction<UserRegistered>>(loginUserActionCreator(user));
  }

  return (
    <>
      <Login />
      <RobotsForm />
      <RobotsList />
    </>
  );
}

export default App;
