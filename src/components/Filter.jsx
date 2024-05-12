import Button from "./Button";
import {
  caloryTypes,
  cuisineTypes,
  dietTypes,
  dishTypes,
  healthCats,
  timeTypes,
} from "../data/data";
import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../slices/filterSlice";

function Filter() {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const hasFilter = filters.length > 0;

  return (
    <div className="px-4 md:flex gap-4 items-center">
      <div>
        <Button className="w-max">
          {hasFilter ? "Apply filters" : "Filter by"}
        </Button>
      </div>
      <div className="flex mt-4 md:mt-0">
        <div className="flex flex-wrap justify-between">
          <FilterButton
            data={cuisineTypes}
            queryString="cuisineType"
            title="Cuisine"
          />
          <FilterButton data={dishTypes} queryString="dish" title="Dish" />
          <FilterButton data={healthCats} queryString="health" title="Health" />
          <FilterButton data={dietTypes} queryString="diet" title="Diet" />
          <FilterButton
            data={timeTypes}
            queryString="time"
            title="Cooking time"
          />
          <FilterButton
            data={caloryTypes}
            queryString="calories"
            title="Calories"
          />
        </div>
        {hasFilter && (
          <h3
            className="cursor-pointer text-orange"
            onClick={() => dispatch(clearFilters())}
          >
            Clear filters
          </h3>
        )}
      </div>
    </div>
  );
}

export default Filter;
