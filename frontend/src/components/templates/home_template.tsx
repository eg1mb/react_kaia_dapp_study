import RouteButton from "../atoms/buttons/route_button";
import Button from "../atoms/buttons/button";

export default function HomeTemplate() {
  const handlePayment = () => {
    const returnUrl = encodeURIComponent(
      `${window.location.origin}/payment_result`
    );

    // 같은 react 앱 안에서 동작하지만 마치 다른 주소인 것처럼
    window.location.href = `http://localhost:5173/billing/static?uuid=0x1234&costs=1000&returnUrl=${returnUrl}`;
  };

  return (
    <>
      <div className="buttonContainer">
        <RouteButton
          className="connectWallet"
          text="지갑 연동하러가기"
          to="/connectWallet"
        />
        <Button className="billing" onClick={handlePayment}>
          <span>결제 하기</span>
        </Button>
      </div>
    </>
  );
}
