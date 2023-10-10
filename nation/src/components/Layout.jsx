import style from "./Layout.module.css";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const nav = useNavigate();
  const onClickNav = () => {
    nav("/");
  };
  return (
    <div>
      <header onClick={onClickNav} className={style.header}>
        <div>🌏 NATIONS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
