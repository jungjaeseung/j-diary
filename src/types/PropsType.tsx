import { User } from "firebase/auth";

export type RouterPropsType = {
  userObj: User;
  isLoggedIn: boolean;
};

export type HomePropsType = {
  userObj: User;
};
