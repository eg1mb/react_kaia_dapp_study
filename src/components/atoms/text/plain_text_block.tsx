interface PlainTextBlockProps {
  className: string;
  text: string;
}

export default function PlainTextBlock({
  className,
  text,
}: PlainTextBlockProps) {
  return <p className={`plainTextBlock ${className}`}>{text}</p>;
}
