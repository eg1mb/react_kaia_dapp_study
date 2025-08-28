import React from "react";

interface NumberInputProps {
  className: string;
  name: string;
  type?: string;
  step?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

export default function NumberInput({
  className,
  name,
  type = "number",
  step,
  value,
  onChange,
  required,
  placeholder,
}: NumberInputProps) {
  return (
    <>
      <input
        className={`numberInput ${className}`}
        name={name}
        type={type}
        step={step}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </>
  );
}
