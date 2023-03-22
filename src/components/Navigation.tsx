import {
  faHouse,
  faCircleUser,
  faPaperPlane,
  faBookmark,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo512.png";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState([true, false, false, false, false]);
  const onClick = (
    e: React.MouseEvent<HTMLSpanElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    console.log(e.target);
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
  const onHomeIconClick = () => {
    navigate("/");
    setIsActive([true, false, false, false, false]);
  };
  const onChatIconClick = () => {
    navigate("/chat");
    setIsActive([false, true, false, false, false]);
  };
  const onBookmarkIconClick = () => {
    navigate("/bookmark");
    setIsActive([false, false, true, false, false]);
  };
  const onFollowIconClick = () => {
    navigate("/follow");
    setIsActive([false, false, false, true, false]);
  };
  const onProfileIconClick = () => {
    navigate("/profile");
    setIsActive([false, false, false, false, true]);
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
        <div className={styles.navContainer}>
          <div className={styles.navBtnContainer}>
            <div className={styles.navIconContainer} onClick={onHomeIconClick}>
              <div className={styles.navIcon}>
                <FontAwesomeIcon
                  icon={faHouse}
                  className={isActive[0] ? "tabActive" : "notTabActive"}
                />
              </div>
              <span
                className={isActive[0] ? "tabActive" : "notTabActive"}
                onClick={onClick}
              >
                홈
              </span>
            </div>
          </div>
          <div className={styles.navBtnContainer}>
            <div className={styles.navIconContainer} onClick={onChatIconClick}>
              <div className={styles.navIcon}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className={isActive[1] ? "tabActive" : "notTabActive"}
                />
              </div>
              <span
                className={isActive[1] ? "tabActive" : "notTabActive"}
                onClick={onClick}
              >
                채팅
              </span>
            </div>
          </div>
          <div className={styles.navBtnContainer}>
            <div
              className={styles.navIconContainer}
              onClick={onBookmarkIconClick}
            >
              <div className={styles.navIcon}>
                <FontAwesomeIcon
                  icon={faBookmark}
                  className={isActive[2] ? "tabActive" : "notTabActive"}
                />
              </div>
              <span
                className={isActive[2] ? "tabActive" : "notTabActive"}
                onClick={onClick}
              >
                북마크
              </span>
            </div>
          </div>
          <div className={styles.navBtnContainer}>
            <div
              className={styles.navIconContainer}
              onClick={onFollowIconClick}
            >
              <div className={styles.navIcon}>
                <FontAwesomeIcon
                  icon={faHandshake}
                  className={isActive[3] ? "tabActive" : "notTabActive"}
                />
              </div>
              <span
                className={isActive[3] ? "tabActive" : "notTabActive"}
                onClick={onClick}
              >
                팔로우
              </span>
            </div>
          </div>
          <div className={styles.navBtnContainer}>
            <div
              className={styles.navIconContainer}
              onClick={onProfileIconClick}
            >
              <div className={styles.navIcon}>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className={isActive[4] ? "tabActive" : "notTabActive"}
                />
              </div>
              <span
                className={isActive[4] ? "tabActive" : "notTabActive"}
                onClick={onClick}
              >
                프로필
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
