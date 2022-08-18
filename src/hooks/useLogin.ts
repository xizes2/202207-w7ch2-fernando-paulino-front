import { UserRegistered } from "../features/users/model/User";
import jwt from "jwt-decode";
import { stringify } from "querystring";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../features/users/usersSlice";
import fetchToken from "../utils/auth";

export const useLogin = () => {
  const url = "http://localhost:4001/";
  const dispatch = useDispatch();

  const login = async (userData: UserRegistered) => {
    const data = await fetch(url + "users/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });
    const { user } = await data.json();

    //Send to state
    dispatch<PayloadAction<UserRegistered>>(loginUserActionCreator(user));

    //Send to localStorage
    localStorage.setItem("token", JSON.stringify(user.token));
  };

  const logout = () => {
    dispatch(logoutUserActionCreator());
    localStorage.removeItem("token");
  };

  const register = async (userData: UserRegistered) => {
    try {
      const data = await fetch(url + "/users/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const {
  //   user: { token },
  // } = await data.json();
  // fetchToken(token);

  return { login, logout, register };
};
