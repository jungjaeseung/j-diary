import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { authService } from "../fbase";
import { useTitle } from "../hooks/useTitle";

const Auth = (): JSX.Element => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [newAccount, setNewAccount] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => setForm({ ...form, [name]: value });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data;
    if (form.email === "") {
      setErrorMessage("이메일을 입력해주세요.");
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErrorMessage("이메일 형식이 아닙니다.");
    } else if (form.password === "") {
      setErrorMessage("비밀번호를 입력해주세요.");
    }

    if (newAccount) {
      //계정 생성하기
      data = await createUserWithEmailAndPassword(
        authService,
        form.email,
        form.password
      ).catch((error) => {
        console.log(error.code);
        setErrorCode(error.code);
      });
    } else {
      //로그인 하기
      data = await signInWithEmailAndPassword(
        authService,
        form.email,
        form.password
      ).catch((error) => {
        console.log(error.code);
        setErrorCode(error.code);
      });
    }
  };
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let provider;
    if ((e.target as HTMLButtonElement).name === "google") {
      provider = new GoogleAuthProvider();
    } else if ((e.target as HTMLButtonElement).name === "facebook") {
      provider = new FacebookAuthProvider();
    } else if ((e.target as HTMLButtonElement).name === "naver") {
      console.log("네이버로그인");
      //네이버 로그인 구현해야함
    }
    const data = await signInWithPopup(
      authService,
      provider as GoogleAuthProvider | FacebookAuthProvider
    ).catch((error) => {
      console.log(error);
    });
    console.log(data);
  };

  useEffect(() => {
    if (errorCode === "auth/email-already-in-use") {
      setErrorMessage("이미 사용중인 이메일 입니다.");
    } else if (errorCode === "auth/weak-password") {
      setErrorMessage("비밀번호를 6글자 이상 입력해주세요.");
    } else if (errorCode === "auth/user-not-found") {
      setErrorMessage("이메일로 가입된 계정이 없습니다.");
    } else if (
      errorCode === "auth/wrong-password" &&
      form.password.length < 6
    ) {
      setErrorMessage("비밀번호를 6글자 이상 입력해주세요.");
    } else if (errorCode === "auth/wrong-password") {
      setErrorMessage("올바르지 않은 비밀번호 입니다.");
    }
  }, [errorCode]);

  useTitle("J-Diary - 로그인");

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
        <span onClick={toggleAccount}>
          {newAccount ? "이미 계정이 있나요?" : "새 계정을 만들까요?"}
        </span>
      </form>
      <span>{errorMessage}</span>
      <div>
        <button name="google" onClick={onSocialClick}>
          구글 로그인
        </button>
        <button name="facebook" onClick={onSocialClick}>
          페이스북 로그인
        </button>
      </div>
    </div>
  );
};

export default Auth;
