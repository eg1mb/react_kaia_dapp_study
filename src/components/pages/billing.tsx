import { useParams } from "react-router";
import FixedBillingTemplate from "../templates/fixed_billing_template";

export default function Billing() {
  const params = useParams();
  const type = params.type;
  if (type === "static") return <FixedBillingTemplate />;
  else if (type === "dynamic") return <h2>개발 중입니다.</h2>;

  return <h2>모드 지정이 잘못되었습니다.</h2>;
}
