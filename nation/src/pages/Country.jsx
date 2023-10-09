import { useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();
  console.log(params);

  return <div>Country : {params.code}</div>;
};

export default Country;
