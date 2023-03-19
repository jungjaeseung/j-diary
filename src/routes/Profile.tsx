import React from "react";
import { useTitle } from "../hooks/useTitle";

const Profile = (): JSX.Element => {
  useTitle("J-Diary - 프로필");
  return <span>Profile 프로필</span>;
};

export default Profile;
