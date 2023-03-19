import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import { AppRouterType } from "./App";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }: AppRouterType) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
