import { useParams } from "react-router";

import Button from "../components/Button";
import Img from "../components/LazyImage";

import { useGetRecipe } from "../services/queries";
import formatTime from "../hooks/functs";
import LovedIcon from "./LovedIcon";
import BookmarkIcon from "./BookmarkIcon";
import { useSelector } from "react-redux";
import { getBookmarks } from "../slices/appSlice";

function Details() {
  const params = useParams();
  const id = params?.id;

  const { recipe, isLoading } = useGetRecipe(id);
  const bookmarks = useSelector(getBookmarks);
  console.log(recipe);
  // ingredients, time, calories, types, servings, metric;

  if (isLoading) return <Loader />;

  return (
    <div className="px-6 mt-4 md:mt-6 md:px-24">
      <div className="relative w-full md:max-w-[550px]  mx-auto">
        <h1 className="absolute bg-white top-[40%] -left-4 text-3xl font-bold font-gatile w-[60%] md:w-[40%] md:text-4xl z-10">
          {recipe?.label}
        </h1>
        <button className="absolute top-10 right-10 z-10">
          <LovedIcon size="30px" item={recipe} />
        </button>

        <Img
          src={recipe?.image}
          alt=""
          className={`w-full md:max-h-[50vh] bg-pink rounded-lg mx-auto ${
            !recipe?.image && "animate-pulse"
          }`}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">By {recipe?.source}</h3>
          <Button className="flex gap-1 items-center bg-pink ">
            <span>
              <BookmarkIcon item={recipe} />
            </span>
            {bookmarks.includes(recipe) ? "Saved" : "Save"}
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
                <h5 className="text-2xl">{formatTime(recipe?.totalTime)}</h5>
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
                  <span className="rounded-[50%] border-orange border-[2px] p-2 mr-4 ">
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

function Loader() {
  return (
    <div className="flex flex-col gap-8 mx-4 mt-8">
      <div className="bg-pink h-[40vh] animate-pulse "></div>
      <div className="bg-pink h-[10vh] animate-pulse "></div>
      <div className="bg-pink h-[20vh] animate-pulse "></div>
      <div className="bg-pink h-[15vh] animate-pulse "></div>
    </div>
  );
}
export default Details;
