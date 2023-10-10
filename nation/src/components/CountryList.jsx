import CountryItem from "./CountryItem";
import style from "./CountryList.module.css";

const CountryList = ({ countries }) => {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
};

CountryList.defaultProps = {
  countries: [],
};

export default CountryList;
