import { TitleType } from "../types/AdminType";
import styles from "./Title.module.css";

const Title = ({ titleName }: TitleType) => {
  return (
    <div className={styles.container}>
      <h1>{titleName}</h1>
    </div>
  );
};

export default Title;
