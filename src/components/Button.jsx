function Button({ children, onClick, className }) {
  return (
    <button
      className={`cursor-pointer bg-orange rounded-lg py-2 px-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
