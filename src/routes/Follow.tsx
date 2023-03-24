import Title from "../components/Title";
import { useTitle } from "../hooks/useTitle";

const Follow = () => {
  useTitle("J-Diary - 팔로우");
  return (
    <div>
      <Title titleName="팔로우" />
      <span>Follow 팔로우 미구현입니다!</span>
    </div>
  );
};

export default Follow;
