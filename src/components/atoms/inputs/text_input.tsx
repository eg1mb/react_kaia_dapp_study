import React from "react";

interface TextInputProps {
  className: string;
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function TextInput({
  className,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: TextInputProps) {
  return (
    <>
      <input
        className={`textInput ${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      ></input>
    </>
  );
}
