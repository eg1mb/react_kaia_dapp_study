interface HyperlinkProps {
  className: string;
  head?: string;
  text: string;
  tail?: string;
  href: string;
}

export default function Hyperlink({
  className,
  head,
  text,
  tail,
  href,
}: HyperlinkProps) {
  return (
    <a className={`hyperlink ${className}`} href={href}>
      <span className="container">
        {head && <span>{head}</span>}
        <span>{text}</span>
        {tail && <span>{tail}</span>}
      </span>
    </a>
  );
}
