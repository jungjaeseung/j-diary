import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import { authService } from "../fbase";
import { useTitle } from "../hooks/useTitle";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    signOut(authService).catch((error) => {
      console.log(error);
    });
    navigate("/");
  };

  useTitle("J-Diary - 홈");
  return (
    <>
      <span>Home 홈</span>
      <button onClick={onLogoutClick}>로그아웃</button>
    </>
  );
};

export default Home;
