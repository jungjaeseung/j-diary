import Title from "../components/Title";
import { useTitle } from "../hooks/useTitle";

const Bookmark = () => {
  useTitle("J-Diary - 북마크");
  return (
    <div>
      <Title titleName="북마크" />
      <span>Bookmark 북마크 미구현입니다!</span>
    </div>
  );
};

export default Bookmark;
