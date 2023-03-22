import Title from "../components/Title";
import { useTitle } from "../hooks/useTitle";
import styles from "./Home.module.css";

const Home = (): JSX.Element => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  useTitle("J-Diary - 홈");
  return (
    <>
      <div>
        <Title titleName="홈" />
        <div className={styles.formContainer}>
          <form onSubmit={onSubmit} className={styles.mainForm}>
            <div>
              {/* 프로필 이미지 들어갈곳 */}
              <div>
                <input
                  type="text"
                  placeholder="오늘의 하루는 어떠신가요?"
                  maxLength={120}
                  className={styles.mainFormInput}
                />
                <input type="submit" value="작성" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
