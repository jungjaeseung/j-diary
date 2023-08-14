import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./setInitProfile.module.css";
import { User, updateProfile } from "firebase/auth";
import { authService } from "../fbase";

const SetInitProfile = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const onChange = (e: any) => {
    setUserName(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(authService.currentUser as User, {
      displayName: userName,
      //프로필사진변경
      //profileURL: "",
    })
      .then(() => {
        //profile updated!
      })
      .catch((error) => {
        console.log(error);
      });

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
