import { useState } from "react";

function LightButton({ children, onClick, className, item, filterData }) {
  const [added, setAdded] = useState(false);
  const filterItem = filterData.map((item) => item.split("=")[1]);
  return (
    <button
      className={`cursor-pointer text-black py-0.5 px-0.5 font-bold text-[12px] border border-gray-500 rounded-md ${
        className && className
      } ${
        (added ||
          filterItem.includes(item) ||
          filterItem.includes(item.label)) &&
        filterData.length > 0
          ? "text-orange border-orange"
          : ""
      }`}
      onClick={() => {
        onClick();
        setAdded((added) => (filterItem.includes(item) ? false : !added));
      }}
    >
      {children}
    </button>
  );
}

export default LightButton;
