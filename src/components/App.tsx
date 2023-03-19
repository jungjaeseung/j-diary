import React, { useState, useEffect } from "react";
import { authService } from "../fbase";
import "./App.module.css";
import AppRouter from "./Router";

export type AppRouterType = {
  isLoggedIn: boolean;
};

function App(): JSX.Element {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    authService.onAuthStateChanged(() => {
      if (authService.currentUser !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : <h1>로딩중...</h1>}
      {/* <footer>&copy; {new Date().getFullYear()} 3harang Capstone</footer> */}
    </>
  );
}
export default App;
