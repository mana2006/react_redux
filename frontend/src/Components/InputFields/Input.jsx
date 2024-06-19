const Input = (props) => {
  const { typeInput, label, className, data, setData } = props;
  return (
    <>
      <label>{label}</label>
      {typeInput === 'textarea' ? (
        <textarea className={className} placeholder={data} onChange={(e) => setData(e.target.value)}></textarea>
      ) : (
        <input type={typeInput} placeholder={data} className={className} onChange={(e) => setData(e.target.value)} />
      )}
    </>
  );
}

export default Input;
