import { Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import SetInitProfile from "../routes/SetInitProfile";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import { IsLoggedInType } from "../types/UserType";
import Navigation from "./Navigation";
import styles from "./Router.module.css";
import ChatMain from "../routes/ChatMain";
import Bookmark from "../routes/Bookmark";
import Follow from "../routes/Follow";
import Aside from "./Aside";

const AppRouter = ({ isLoggedIn }: IsLoggedInType) => {
  return (
    <>
      {isLoggedIn && <Navigation />}
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/setusername" element={<SetInitProfile />} />
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<ChatMain />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/follow" element={<Follow />} />
                <Route path="/profile" element={<Profile />} />
              </>
            ) : (
              <Route path="/" element={<Auth />} />
            )}
          </Routes>
        </div>
        <Aside isLoggedIn={isLoggedIn} />
      </main>
    </>
  );
};

export default AppRouter;
