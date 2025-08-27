import { useState, useEffect } from "react";
import Button from "../atoms/buttons/button";
import RouteButton from "../atoms/buttons/route_button";

interface BillingButtonProps {
  className: string;
  head?: string;
  text: string;
  tail?: string;
  to: string;
  disabled?: boolean;
}

type Target = "_blank" | "_self";

export default function BillingButton({
  className,
  head,
  text,
  tail,
  to,
  disabled,
}: BillingButtonProps) {
  const [location, setLocation] = useState("");
  const [target, setTarget] = useState<Target>("_self");

  useEffect(() => {
    setLocation(window.location.origin);

    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera mini/i.test(
        userAgent
      );

    if (!isMobile) setTarget("_blank");
  }, []);

  const popupFunction = () => {
    const popup = window.open(
      `${location}${to}`,
      `${target}`,
      "width=600, height=800"
    );

    if (!popup || popup.outerWidth === 0 || popup.innerWidth === 0) {
      alert("팝업이 차단되었습니다. 팝업 차단을 해제한 후 다시 시도해주세요.");
      popup?.close();
    }
  };

  return (
    <>
      {target === "_blank" ? (
        <Button
          className={className}
          onClick={popupFunction}
          disabled={disabled}
        >
          <span className="container">
            {head && <span>{head}</span>}
            <span>{text}</span>
            {tail && <span>{tail}</span>}
          </span>
        </Button>
      ) : (
        <RouteButton
          className={className}
          head={head}
          text={text}
          tail={tail}
          to={to}
          disabled={disabled}
        />
      )}
    </>
  );
}
