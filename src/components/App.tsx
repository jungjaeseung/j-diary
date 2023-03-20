import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { authService } from "../fbase";
import "./App.module.css";
import AppRouter from "./Router";
import styles from "./App.module.css";

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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.appContainer}>
        {init ? <AppRouter isLoggedIn={isLoggedIn} /> : <h1>로딩중...</h1>}
      </div>
    </BrowserRouter>
  );
}
export default App;
