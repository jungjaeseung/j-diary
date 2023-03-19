import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import { authService } from "../fbase";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    signOut(authService).catch((error) => {
      console.log(error);
    });
    navigate("/");
  };
  return (
    <>
      <span>Home 홈</span>
      <button onClick={onLogoutClick}>로그아웃</button>
    </>
  );
};

export default Home;
