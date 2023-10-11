import { useEffect } from "react";

export default function Home({ name }) {
  console.log("홈인데 실행되나 보자");

  useEffect(() => {
    console.log("그래 브라우저에서만 실행해");
  }, []);
  return <div>{name}</div>;
}

export const getServerSideProps = async () => {
  // ssr을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수

  return {
    props: {
      name: "KOREA",
    },
  };
};
