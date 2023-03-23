import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { NavPropsType } from "../types/AdminType";
import styles from "./Navigation.module.css";
const Navigation = ({ data, isActive, setIsActive }: NavPropsType) => {
  const navigate = useNavigate();

  const renderNavIcons = (): JSX.Element[] => {
    const navIcon = data.map((datas, index: number) => {
      return (
        <div key={index} className={styles.navBtnContainer}>
          <div
            className={styles.navIconContainer}
            onClick={() => onIconClick(index, datas.location)}
          >
            <div className={styles.navIcon}>
              <FontAwesomeIcon
                icon={datas.icon}
                className={isActive[index] ? "tabActive" : "notTabActive"}
              />
            </div>
            <span className={isActive[index] ? "tabActive" : "notTabActive"}>
              {datas.text}
            </span>
          </div>
        </div>
      );
    });
    return navIcon;
  };

  const onIconClick = (index: number, location: string) => {
    let arr: boolean[] = new Array();
    data.map(() => {
      arr.push(false);
    });
    arr[index] = true;
    setIsActive(arr);
    navigate(location);
  };

  return <div className={styles.navContainer}>{renderNavIcons()}</div>;
};

export default Navigation;
