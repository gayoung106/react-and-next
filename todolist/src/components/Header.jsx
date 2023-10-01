import "./Header.css";

const Header = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString(undefined, options);

  return (
    <div className="Header">
      <h1>{date}</h1>
    </div>
  );
};

export default Header;
