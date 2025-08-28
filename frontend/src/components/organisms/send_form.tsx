import { useState } from "react";
import TextInput from "../atoms/inputs/text_input";
import NumberInput from "../atoms/inputs/number_input";
import Button from "../atoms/buttons/button";
import PlainTextBlock from "../atoms/text/plain_text_block";

interface SendFormProps {
  onSendTransaction: (to: string, amount: string) => void;
}

export default function SendForm({ onSendTransaction }: SendFormProps) {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (to && amount) {
      onSendTransaction(to, amount);
      setTo("");
      setAmount("");
    }
  };

  return (
    <div className="send-form">
      <PlainTextBlock className="form-title" text="KAIA 전송" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <TextInput
            className="address-input"
            name="to"
            type="text"
            placeholder="받는 주소"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required={true}
          />
        </div>
        <div className="form-group">
          <NumberInput
            className="amount-input"
            name="amount"
            step="0.0001"
            placeholder="보낼 금액 (KAIA)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required={true}
          />
        </div>
        <Button type="submit" className="send-button">
          전송
        </Button>
      </form>
    </div>
  );
}
