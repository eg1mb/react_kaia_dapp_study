import PlainTextBlock from "../atoms/text/plain_text_block";

interface TxRowProps {
  label: string;
  value: string;
  className?: string;
}

export default function TxRow({ label, value, className = "" }: TxRowProps) {
  return (
    <div className="row">
      <PlainTextBlock className={label} text={label} />
      <PlainTextBlock
        className={"value".concat(" " + className || "")}
        text={value}
      />
    </div>
  );
}
