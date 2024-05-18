import { Link } from "react-router-dom";
import { useGetRandom } from "../services/queries";
import LovedIcon from "./LovedIcon";
import BookmarkIcon from "./BookmarkIcon";
import Img from "./LazyImage";

function BigCard() {
  const { recipes, isLoading } = useGetRandom();
  const recipe = recipes?.[0].recipe;
  // const {label,image,totalTime:time,cuisineType,uri} = recipe
  const id = recipe?.uri.split("_")[1];

  return (
    <Link
      to={`/recipe/${id}`}
      className="grow shadow-md rounded-b-lg max-w-[30rem]"
    >
      <figure className="relative">
        {isLoading ? (
          <div className="bg-pink h-[40vh]"></div>
        ) : (
          <Img
            src={recipe?.image}
            alt="recipe-image"
            className={`rounded-t-lg w-full `}
          />
        )}
        <button className="absolute right-4 top-5 text-2xl text-red ">
          <LovedIcon item={recipe} size="30px" />
        </button>
      </figure>
      <div className="px-4 mt-4 pb-4">
        <h5 className="text-xl font-semibold ">{recipe?.label}</h5>
        <div className="flex justify-between items-center mt-2 ">
          <div className="flex gap-2">
            <h6>{recipe?.totalTime} minutes</h6>
            <h6 className="capitalize">{recipe?.cuisineType}</h6>
          </div>
          <BookmarkIcon item={recipe} />
        </div>
      </div>
    </Link>
  );
}

export default BigCard;
