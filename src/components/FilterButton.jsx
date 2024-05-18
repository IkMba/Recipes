import LightButton from "./LightButton";
import { GoChevronDown } from "react-icons/go";

function FilterButton({
  title,
  data,
  queryString,
  id,
  onClick,
  active,
  setFilterData,
  filterData,
  isOpen,
  setIsOpen,
}) {
  const open = active === id && isOpen;

  const handleClick = () => {
    onClick();
    setIsOpen((open) => !open);
  };
  return (
    <div className="w-fit relative  ">
      <div
        className={`flex gap-2 items-center border-2 border-gray-500 rounded-md px-2 py-0.5 whitespace-nowrap cursor-pointer text-[14px] md:text-md ${
          open && "font-bold text-[16px]"
        }`}
        onClick={handleClick}
      >
        <h5>{title}</h5>
        <GoChevronDown />
      </div>
      {open && (
        <div className="absolute z-20 bg-white w-56 p-2 flex flex-wrap gap-1 shadow-md overflow-y-auto">
          {data.map((item) => (
            <LightButton
              key={item.label ? item.label : item}
              onClick={() => {
                const filter = `&${queryString}=${
                  item.value ? item.value : item
                }`;
                filterData.includes(filter)
                  ? setFilterData(filterData.filter((item) => item !== filter))
                  : setFilterData((data) => [...data, filter]);
              }}
              item={item}
              filterData={filterData}
            >
              {item.label ? item.label : item}
            </LightButton>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterButton;
