import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country() {
  const router = useRouter();
  const { code } = router.query;

  return <div>Country </div>;
}

Country.Layout = SubLayout;
