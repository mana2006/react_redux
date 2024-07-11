const Input = (props) => {
  const { inputType, label, className, data, setData } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          className={className}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      ) : (
        <input
          type={inputType}
          placeholder={data}
          className={className}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
