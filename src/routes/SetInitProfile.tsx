import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./setInitProfile.module.css";

const SetInitProfile = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const onChange = (e: any) => {
    setUserName(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //이름넣기
    //프로필사진변경

    navigate("/");
  };
  return (
    <div className={styles.blackBg}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="당신의 이름은?"
            value={userName}
            onChange={onChange}
          />
          <input type="submit" value="이름 설정" />
        </form>
      </div>
    </div>
  );
};

export default SetInitProfile;
