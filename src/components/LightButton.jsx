function LightButton({ children, onClick, className }) {
  return (
    <button
      className={`cursor-pointer  py-2 px-2 text-sm ${className && className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default LightButton;
