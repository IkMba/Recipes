import { useParams } from "react-router";
import { useGetRecipes } from "../services/queries";
import Card, { ShowMoreCard } from "./Card";
import { useSelector } from "react-redux";
import { getFilters } from "../slices/appSlice";

function HealthRecipes() {
  const params = useParams();
  const searchQuery = params?.recipe;

  const filter = useSelector(getFilters);
  const filters = filter.join("");
  const query = `&health=${searchQuery}${filters}`;
  const { recipes } = useGetRecipes(query);

  return (
    <div className="px-8 pt-6 md:pl-16 md:pr-16">
      <h2 className="text-3xl font-bold font-gatile py-4 capitalize">
        {searchQuery} Recipes
      </h2>
      <div className="flex flex-wrap gap-8">
        {recipes?.map((item, i) =>
          i === recipes.length - 1 ? (
            <ShowMoreCard key={item.label} />
          ) : (
            <Card item={item.recipe} key={item.label} />
          )
        )}
      </div>
    </div>
  );
}

export default HealthRecipes;
