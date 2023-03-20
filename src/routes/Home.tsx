import { useTitle } from "../hooks/useTitle";

const Home = (): JSX.Element => {
  useTitle("J-Diary - 홈");
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
          />
        </form>
      </div>
    </>
  );
};

export default Home;
