import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if ((e.target as HTMLSpanElement).innerHTML === "홈") {
      navigate("/");
    } else if ((e.target as HTMLSpanElement).innerHTML === "프로필") {
      navigate("/profile");
    }
  };
  return (
    <div>
      <span onClick={onClick}>홈</span>
      <span onClick={onClick}>프로필</span>
    </div>
  );
};

export default Navigation;
