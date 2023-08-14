import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { authService } from "../fbase";
import "./App.module.css";
import AppRouter from "./Router";
import styles from "./App.module.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "firebase/auth";

function App(): JSX.Element {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userObj, setUserObj] = useState<User | null>(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (authService.currentUser !== null) {
        setIsLoggedIn(true);
        setUserObj(user);
        console.log(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.appContainer}>
        {init ? (
          <AppRouter userObj={userObj as User} isLoggedIn={isLoggedIn} />
        ) : (
          <div className={styles.loadingContainer}>
            <FontAwesomeIcon icon={faSpinner} spin className={styles.loading} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;
