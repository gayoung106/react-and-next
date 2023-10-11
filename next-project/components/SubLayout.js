import style from "./SubLayout.module.css";

const SubLayout = ({ children }) => {
  return (
    <div className="SubLayout">
      <div>{children}</div>
      <footer className={style.footer}>@gayoung</footer>
    </div>
  );
};

export default SubLayout;
