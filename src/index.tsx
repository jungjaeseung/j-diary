import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./components/App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
