function CustomInput({ type, name, value, onChange }) {
  return (
    <input
      className="border-2 border-black"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default CustomInput;
