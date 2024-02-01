function Button({ text, className, onClick }) {
  return (
    <button
      className={`bg-blue-500 p-2 text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
