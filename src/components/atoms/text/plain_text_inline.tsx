interface PlainTextInlineProps {
  className: string;
  text: string;
}

export default function PlainTextInline({
  className,
  text,
}: PlainTextInlineProps) {
  return <span className={`plainTextInline ${className}`}>{text}</span>;
}
