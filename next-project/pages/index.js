import { fetchCountries } from "@/api";

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // API 호출 코드가 필요
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
