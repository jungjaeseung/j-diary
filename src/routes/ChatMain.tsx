import Title from "../components/Title";
import { useTitle } from "../hooks/useTitle";

const ChatMain = () => {
  useTitle("J-Diary - 채팅");
  return (
    <div>
      <Title titleName="채팅" />
      <span>Chat 채팅 미구현입니다!</span>
    </div>
  );
};

export default ChatMain;
