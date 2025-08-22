import { Link } from "react-router";

interface HyperlinkRouteProps {
  className: string;
  head?: string;
  text: string;
  tail?: string;
  to: string;
}

export default function HyperlinkRoute({
  className,
  head,
  text,
  tail,
  to,
}: HyperlinkRouteProps) {
  return (
    <Link className={`hyperlinkRoute ${className}`} to={to}>
      <span className="container">
        {head && <span>{head}</span>}
        <span>{text}</span>
        {tail && <span>{tail}</span>}
      </span>
    </Link>
  );
}
