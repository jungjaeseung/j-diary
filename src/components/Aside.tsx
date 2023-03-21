import { IsLoggedInType } from "../types/UserType";
import styles from "./Aside.module.css";
import Footer from "./Footer";

const Aside = ({ isLoggedIn }: IsLoggedInType) => {
  return (
    <div className={styles.asideContainer}>
      {isLoggedIn && (
        <>
          <div>
            <input
              className={styles.asideInput}
              type="text"
              placeholder="검색"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={styles.asideBox}
          >
            <span>API등 넣을 곳?</span>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Aside;
