import { useNavigate } from "react-router";

interface RouteButtonProps {
  className: string;
  head?: string;
  text: string;
  tail?: string;
  to: string;
  disabled?: boolean;
}

export default function RouteButton({
  className,
  head,
  text,
  tail,
  to,
  disabled = false,
}: RouteButtonProps) {
  const route = useNavigate();

  const routeFunction = () => {
    route(`${to}`);
  };

  return (
    <>
      <button
        className={`routeButton ${className}`}
        onClick={routeFunction}
        disabled={disabled}
      >
        <span className="container">
          {head && <span>{head}</span>}
          <span>{text}</span>
          {tail && <span>{tail}</span>}
        </span>
      </button>
    </>
  );
}
