import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo512.png";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState([true, false, false, false, false]);
  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if ((e.target as HTMLSpanElement).innerHTML === "홈") {
      setIsActive([true, false, false, false, false]);

      navigate("/");
    } else if ((e.target as HTMLSpanElement).innerHTML === "채팅") {
      setIsActive([false, true, false, false, false]);

      navigate("/chat");
    } else if ((e.target as HTMLSpanElement).innerHTML === "북마크") {
      setIsActive([false, false, true, false, false]);

      navigate("/bookmark");
    } else if ((e.target as HTMLSpanElement).innerHTML === "팔로우") {
      setIsActive([false, false, false, true, false]);

      navigate("/follow");
    } else if ((e.target as HTMLSpanElement).innerHTML === "프로필") {
      setIsActive([false, false, false, false, true]);

      navigate("/profile");
    }
  };
  const onLogoClick = () => {
    navigate("/");
    setIsActive([true, false, false, false, false]);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.appIconContainer}>
          <img src={logo} onClick={onLogoClick} />
        </div>
        <div className={styles.navContainer}>
          <div className={styles.navBtnContainer}>
            <span
              className={isActive[0] ? "tabActive" : "notTabActive"}
              onClick={onClick}
            >
              홈
            </span>
          </div>
          <div className={styles.navBtnContainer}>
            <span
              className={isActive[1] ? "tabActive" : "notTabActive"}
              onClick={onClick}
            >
              채팅
            </span>
          </div>
          <div className={styles.navBtnContainer}>
            <span
              className={isActive[2] ? "tabActive" : "notTabActive"}
              onClick={onClick}
            >
              북마크
            </span>
          </div>
          <div className={styles.navBtnContainer}>
            <span
              className={isActive[3] ? "tabActive" : "notTabActive"}
              onClick={onClick}
            >
              팔로우
            </span>
          </div>
          <div className={styles.navBtnContainer}>
            <span
              className={isActive[4] ? "tabActive" : "notTabActive"}
              onClick={onClick}
            >
              프로필
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
