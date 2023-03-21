import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <span>
        &copy; {new Date().getFullYear()} 3harang J-Diary{" "}
        <a
          href="https://jungjaeseung.github.io/j-diary-privacy"
          target="_blank"
        >
          개인정보 처리방침
        </a>
      </span>
    </footer>
  );
};

export default Footer;
