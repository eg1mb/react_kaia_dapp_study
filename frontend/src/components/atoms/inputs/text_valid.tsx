export default function TextValid(props: {
  className: string;
  isValidate: boolean;
  alert?: string;
}) {
  return (
    <>
      {props.isValidate ? (
        <span className="textValidator valid">사용 가능합니다.</span>
      ) : (
        <span className="textValidator invalid">{props.alert}</span>
      )}
    </>
  );
}
