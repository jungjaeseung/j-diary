import { useTitle } from "../hooks/useTitle";

const Home = (): JSX.Element => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  useTitle("J-Diary - 홈");
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="다이어리 작성 input"
            maxLength={120}
          />
          <input type="submit" value="작성" />
        </form>
      </div>
    </>
  );
};

export default Home;
