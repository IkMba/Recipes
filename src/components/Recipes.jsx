import { useParams } from "react-router";
import { useGetRecipes } from "../services/queries";
import Card, { ShowMoreCard } from "./Card";
import { useSelector } from "react-redux";
import { getFilters } from "../slices/appSlice";
import CardSket from "./CardSket";

function Recipes() {
  const params = useParams();
  const searchQuery = params?.recipe;

  const filter = useSelector(getFilters);
  const query = `&q=${searchQuery}${filter}`;
  const { recipes, isLoading } = useGetRecipes(query);

  return (
    <div className=" px-8 md:pl-16 md:pr-16 ">
      <h2 className="text-3xl font-bold font-gatile py-4 capitalize">
        {searchQuery} Recipes
      </h2>
      <div className="flex flex-wrap gap-4 ">
        {isLoading && [...Array(10)].map((i) => <CardSket key={i} />)}
        {!isLoading &&
          recipes?.map((item, i) =>
            i === recipes.length - 1 ? (
              <ShowMoreCard key={i} />
            ) : (
              <Card item={item?.recipe} key={item.label} />
            )
          )}
      </div>
    </div>
  );
}

export default Recipes;
