import Title from "../components/Title";
import { useTitle } from "../hooks/useTitle";
import styles from "./Home.module.css";
import React, { useState, useRef, useEffect } from "react";
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { dbService } from "../fbase";
import { HomePropsType } from "../types/PropsType";
import { PostDataType } from "../types/AdminType";
import PhotoSection from "../components/PhotoSection";

const Home = ({ userObj }: HomePropsType): JSX.Element => {
  const inputMaxLength = 120;

  const [input, setInput] = useState("");
  const [data, setData] = useState<PostDataType[]>([]);
  const inputArea = useRef<HTMLTextAreaElement>(null);
  const homeDiv = useRef<HTMLDivElement>(null);
  const contentDiv = useRef<HTMLDivElement>(null);
  const formDiv = useRef<HTMLDivElement>(null);

  const getData = async () => {
    const q = query(
      collection(dbService, "posts"),
      orderBy("timestamp", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const dataArr: PostDataType[] = snapshot.docs.map((doc) => {
        return {
          data: doc.data(),
          id: doc.id,
        };
      });
      setData(dataArr);
    });
  };
  useEffect(() => {
    getData();
    console.log(data);
    handleContentDiv();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleContentDiv);
    return () => {
      window.removeEventListener("resize", handleContentDiv);
    };
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "posts"), {
        text: input,
        timestamp: Date.now(),
        uid: userObj.uid,
        // profileImg
        // userName
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
    setInput("");
    if (inputArea.current !== null) {
      inputArea.current.style.height = "26px";
      handleContentDiv();
    }
  };
  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    handleTextAreaHeight();
    setInput(value);
  };

  const handleTextAreaHeight = () => {
    if (
      inputArea.current !== null &&
      contentDiv.current !== null &&
      homeDiv.current !== null &&
      formDiv.current !== null
    ) {
      inputArea.current.style.height = "auto";
      inputArea.current.style.height = inputArea.current.scrollHeight + "px";
      handleContentDiv();
    }
  };
  const handleContentDiv = () => {
    if (
      homeDiv.current !== null &&
      formDiv.current !== null &&
      contentDiv.current !== null
    ) {
      contentDiv.current.style.height =
        (
          homeDiv.current.clientHeight -
          formDiv.current.clientHeight -
          1
        ).toString() + "px";
    }
  };
  useTitle("J-Diary - 홈");
  return (
    <>
      <div className={styles.main}>
        <Title titleName="홈" />
        <div className={styles.mainHomeContainer} ref={homeDiv}>
          <div className={styles.formContainer} ref={formDiv}>
            <PhotoSection />
            <form onSubmit={onSubmit} className={styles.mainForm}>
              <div className={styles.mainFromContainer}>
                <div className={styles.mainFormInputContainer}>
                  <textarea
                    placeholder="오늘의 하루는 어떠신가요?"
                    maxLength={inputMaxLength}
                    className={styles.mainFormInput}
                    rows={1}
                    ref={inputArea}
                    onChange={onChange}
                    spellCheck={false}
                    value={input}
                  />
                </div>
              </div>
              <input
                className={styles.mainFormSubmitBtn}
                type="submit"
                value="작성"
              />
            </form>
          </div>
          <div className={styles.mainContentContainer} ref={contentDiv}>
            {data.map((item) => (
              <div className={styles.postContainer} key={item.id}>
                <PhotoSection />
                <div>
                  <div className={styles.infoSection}>
                    <span>닉네임</span>
                    <span>@email · </span>
                    <span>1s</span>
                  </div>
                  <h4 className={styles.content}>
                    {(item.data as DocumentData).text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
