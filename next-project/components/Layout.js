import React from "react";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header className={style.header}>NATIONS</header>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
