import { useParams } from "react-router";
import { useGetRecipes } from "../services/queries";
import Card, { ShowMoreCard } from "./Card";
import Search from "./Search";

function MealType() {
  const params = useParams();
  const mealType = params?.meals;
  // const recipes = getRecipes('mealType',"Breakfast")
  const query = `&mealType=${mealType}`;
  const { recipes } = useGetRecipes(query);
  console.log(recipes);
  return (
    <div className="px-8 pt-6 md:pl-16 md:pr-16">
      <div className="flex justify-between mb-4">
        <h3 className="text-3xl capitalize font-gatile font-bold">
          {mealType}
        </h3>
        <Search />
      </div>
      <div className="flex gap-4 flex-wrap rounded-t-md">
        {recipes?.map((item, i) =>
          i === recipes.length - 1 ? (
            <ShowMoreCard key={item} />
          ) : (
            <Card item={item} key={item.id} />
          )
        )}
      </div>
    </div>
  );
}

export default MealType;
