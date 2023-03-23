import {
  faHouse,
  faCircleUser,
  faPaperPlane,
  faBookmark,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo512.png";
import { NavDataComponentType } from "../types/AdminType";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState([true, false, false, false, false]);

  const data: NavDataComponentType = [
    {
      icon: faHouse,
      text: "홈",
      location: "/",
    },
    {
      icon: faPaperPlane,
      text: "채팅",
      location: "/chat",
    },
    {
      icon: faBookmark,
      text: "북마크",
      location: "/bookmark",
    },
    {
      icon: faHandshake,
      text: "팔로우",
      location: "/follow",
    },
    {
      icon: faCircleUser,
      text: "프로필",
      location: "/profile",
    },
  ];

  const onLogoClick = () => {
    let arr = new Array();
    data.map(() => {
      arr.push(false);
    });
    arr[0] = true;
    setIsActive(arr);
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.appIconContainer}>
          <div className={styles.appIconClickable} onClick={onLogoClick}>
            <img src={logo} />
            <h1>J-Diary</h1>
          </div>
        </div>
        <Navigation data={data} isActive={isActive} setIsActive={setIsActive} />
      </div>
    </header>
  );
};

export default Header;
