import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { authService } from "../fbase";
import { useTitle } from "../hooks/useTitle";

const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    signOut(authService).catch((error) => {
      console.log(error);
    });
    navigate("/");
  };
  useTitle("J-Diary - 프로필");

  return (
    <>
      <div>
        <Title titleName="프로필" />
        <span>Profile 프로필</span>
        <br />
        <button onClick={onLogoutClick}>로그아웃</button>
      </div>
    </>
  );
};

export default Profile;
