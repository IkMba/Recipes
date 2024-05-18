import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "./Button";
import FilterButton from "./FilterButton";

import { filterButtonData } from "../data/data";
import { addFilter, clearFilters } from "../slices/appSlice";

function Filter() {
  const [active, setActive] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = [...new Set(filterData)];
  const dispatch = useDispatch();
  const hasFilter = filterData.length > 0;

  return (
    <div
      className={`px-4 flex gap-4 items-center overflow-scroll no-scrollbar`}
    >
      <Button
        className="w-fit relative"
        onClick={() => {
          dispatch(addFilter(filteredData.join("")));
          setIsOpen(false);
        }}
      >
        {hasFilter ? "Apply filters" : "Filter by"}
        {filteredData.length > 0 && (
          <span className="absolute -top-3 right-0 bg-pink py-0 px-1 rounded-lg">
            {filteredData.length}
          </span>
        )}
      </Button>
      {filterButtonData.map((item, i) => (
        <FilterButton
          key={item.title}
          data={item.data}
          id={item.id}
          queryString={item.queryString}
          title={item.title}
          onClick={() => setActive(i)}
          active={active}
          setFilterData={setFilterData}
          filterData={filterData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
      {hasFilter && (
        <h3
          className="cursor-pointer text-orange"
          onClick={() => {
            filterData.length = 0;
            dispatch(clearFilters());
            setIsOpen(false);
          }}
        >
          Clear filters
        </h3>
      )}
    </div>
  );
}

export default Filter;
