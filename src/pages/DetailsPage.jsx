import { useParams } from "react-router";
import { useGetRecipe } from "../services/queries";
import { CiBookmark } from "react-icons/ci";
import Button from "../components/Button";

function DetailsPage() {
  const params = useParams();
  const id = params?.id;

  const { recipe } = useGetRecipe(id);
  // ingredients, time, calories, types, servings, metric;

  console.log(recipe);
  return (
    <div className="px-6 md:px-24">
      <div className="relative">
        <h1 className="absolute bg-white top-[40%] -left-4 text-3xl font-bold font-gatile w-[60%] md:w-[40%] md:text-4xl">
          {recipe?.label}
        </h1>
        <img
          src={recipe?.image}
          alt=""
          className="w-full md:h-96 object-cover"
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">By {recipe?.source}</h3>
          <Button className="flex gap-1 items-center">
            <span>
              <CiBookmark />
            </span>
            Saved
          </Button>
        </div>

        <div className="md:flex gap-16 justify-between">
          <div className="mt-4 md:mt-2 flex-1">
            <div className="flex justify-between md:justify-around text-center mt-4">
              <div className="">
                <h5 className="text-2xl">{recipe?.ingredients.length}</h5>
                <h5 className="font-bold text-sm">Ingredients</h5>
              </div>
              <div>
                <h5 className="text-2xl">{recipe?.totalTime}</h5>
                <h5 className="font-bold text-sm">Minutes</h5>
              </div>
              <div>
                <h5 className="text-2xl">{Math.floor(recipe?.calories)}</h5>
                <h5 className="font-bold text-sm">Calories</h5>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <h5 className="border border-grey py-1 px-2 rounded-lg">
                {recipe?.cuisineType}
              </h5>
              <h5 className="border border-grey py-1 px-2 rounded-lg">
                {recipe?.mealType}
              </h5>
              <h5 className="border border-grey py-1 px-2 rounded-lg">
                {recipe?.dishType}
              </h5>
            </div>

            <div className="mt-4">
              <h3 className="text-3xl font-bold">Instructions</h3>
              {recipe?.ingredientLines.map((item, i) => (
                <div key={item} className="mt-4 flex items-center">
                  <span className="rounded-[50%] border-orange border-[3px] p-2 mr-4 ">
                    {i + 1}
                  </span>
                  <h5>{item}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-pink px-6 py-2 rounded-xl md:basis-[20rem] lg:basis-[32rem] ">
            <h3 className="text-3xl font-bold">Ingredients</h3>
            {recipe?.ingredients.map((item) => (
              <h4
                key={item.foodId}
                className="capitalize text-lg py-1 flex justify-between"
              >
                {item.food}:
                <span>
                  {item.quantity.toFixed(1)} {item.measure}
                </span>
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
