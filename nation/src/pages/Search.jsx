import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return <div>Search {searchParams.get("q")}</div>;
};

export default Search;
