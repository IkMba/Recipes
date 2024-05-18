import { useParams } from "react-router";
import { useGetRecipes } from "../services/queries";
import Card, { ShowMoreCard } from "./Card";
import Search from "./Search";
import CardSket from "./CardSket";

function MealType() {
  const params = useParams();
  const mealType = params?.meals;
  // const recipes = getRecipes('mealType',"Breakfast")
  const query = `&mealType=${mealType}`;
  const { recipes, isLoading } = useGetRecipes(query);
  return (
    <div className="px-8 pt-6 md:pl-16 md:pr-16">
      <div className="flex justify-between mb-4">
        <h3 className="text-3xl capitalize font-gatile font-bold">
          {mealType}
        </h3>
        <Search />
      </div>
      <div className="flex gap-4 flex-wrap rounded-t-md">
        {isLoading && [...Array(10)].map((item, i) => <CardSket key={i} />)}
        {!isLoading &&
          recipes?.map((item, i) =>
            i === recipes.length - 1 ? (
              <ShowMoreCard key={item.label} />
            ) : (
              <Card item={item?.recipe} key={item.label} />
            )
          )}
      </div>
    </div>
  );
}

export default MealType;
