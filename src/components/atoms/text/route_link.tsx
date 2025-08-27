import { Link } from "react-router";

interface RouteLinkProps {
  className: string;
  head?: string;
  text: string;
  tail?: string;
  to: string;
}

export default function RouteLink({
  className,
  head,
  text,
  tail,
  to,
}: RouteLinkProps) {
  return (
    <Link className={`RouteLink ${className}`} to={to}>
      <span className="container">
        {head && <span>{head}</span>}
        <span>{text}</span>
        {tail && <span>{tail}</span>}
      </span>
    </Link>
  );
}
