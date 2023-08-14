import styles from "./Post.module.css";
import { PostDataType } from "../types/AdminType";
import PhotoSection from "./PhotoSection";
import { deleteDoc, doc, DocumentData, updateDoc } from "firebase/firestore";
import { dbService } from "../fbase";
import { useEffect, useRef, useState } from "react";
import { HomePropsType } from "../types/PropsType";
import { User } from "firebase/auth";

const Post = ({
  data,
  isOwner,
  inputMaxLength,
}: {
  data: PostDataType;
  isOwner: boolean;
  inputMaxLength: number;
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateText, setUpdateText] = useState("");
  const inputArea = useRef<HTMLTextAreaElement>(null);
  const PostTextRef = doc(dbService, "posts", `${data.id}`);
  const onDeleteClick = async () => {
    const ok = window.confirm("정말 이 글을 삭제하실건가요?");
    console.log(ok);
    if (ok) {
      await deleteDoc(PostTextRef);
    }
  };
  const toggleEditing = () => {
    if (!isUpdating) {
      setUpdateText((data.data as DocumentData).text);
    } else {
      setUpdateText("");
    }
    setIsUpdating((prev) => !prev);
  };
  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    setUpdateText(value);
  };
  useEffect(() => {
    handleTextAreaHeight();
  }, [updateText]);
  const handleTextAreaHeight = () => {
    if (inputArea.current !== null) {
      inputArea.current.style.height = "auto";
      inputArea.current.style.height = inputArea.current.scrollHeight + "px";
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateDoc(PostTextRef, { text: updateText });
    setUpdateText("");
    setIsUpdating(false);
  };
  return (
    <div className={styles.postContainer}>
      <PhotoSection />
      <div className={styles.postContentContainer}>
        {isUpdating ? (
          <>
            <form onSubmit={onSubmit}>
              <div className={styles.topDiv}>
                <div className={styles.infoSection}>
                  <span>{`${data.data && data.data.creator}`}</span>
                  <span>@{`${data.data && data.data.creatorEmail}`} · </span>
                  <span>1s</span>
                </div>
                <div>
                  {isOwner && (
                    <>
                      <input type="submit" value="완료" />
                      <button onClick={toggleEditing}>취소</button>
                    </>
                  )}
                </div>
              </div>
              <textarea
                maxLength={inputMaxLength}
                spellCheck={false}
                className={styles.updatingInput}
                value={updateText}
                onChange={onChange}
                rows={1}
                required
                ref={inputArea}
              />
            </form>
          </>
        ) : (
          <>
            <div className={styles.topDiv}>
              <div className={styles.infoSection}>
                <span>{`${data.data && data.data.creator}`}</span>
                <span>@{`${data.data && data.data.creatorEmail}`} · </span>
                <span>1s</span>
              </div>
              <div>
                {isOwner && (
                  <>
                    <button onClick={toggleEditing}>수정</button>
                    <button onClick={onDeleteClick}>삭제</button>
                  </>
                )}
              </div>
            </div>
            <h4 className={styles.content}>{data.data && data.data.text}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
