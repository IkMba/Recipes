import { useState } from "react";
import LightButton from "./LightButton";
import { GoChevronDown } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/filterSlice";

function FilterButton({ title, data, queryString }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [hasFilter,setHasfilter] = useState(false)
  // const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // const filters = useSelector((state) => state.filters.filters);
  // const hasFilters = filters.length > 0;

  return (
    <div className="w-36 relative">
      <div
        className="flex items-center"
        onClick={() => setIsOpen((open) => !open)}
      >
        <h5>{title}</h5>
        <GoChevronDown />
      </div>
      {isOpen && (
        <div className="block absolute z-10 bg-white w-40">
          {data.map((item) => (
            <LightButton
              key={item.label ? item.label : item}
              onClick={() => {
                dispatch(
                  addItem(`&${queryString}=${item.value ? item.value : item}`)
                );
                setIsOpen(false);
              }}
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
