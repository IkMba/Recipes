// import { FaRegHeart } from "react-icons/fa";
import { HeartOutline } from "react-ionicons";
import { Heart } from "react-ionicons";
import { Bookmark } from "react-ionicons";
import { BookmarkOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import { useGetRandom } from "../services/queries";
import { useState } from "react";

function BigCard() {
  const [liked, setLiked] = useState("");
  const [bookmark, setBookmark] = useState("");
  const { recipes } = useGetRandom();
  const recipe = recipes?.[0].recipe;
  // const {label,image,totalTime:time,cuisineType,uri} = recipe
  const id = recipe?.uri.split("_")[1];

  return (
    <Link to={`/recipe/${id}`} className="grow shadow-md rounded-b-lg">
      <figure className="relative">
        <img
          src={recipe?.image}
          alt="recipe-image"
          className="rounded-xl w-full"
        />
        <button className="absolute right-4 top-3 text-2xl text-red ">
          <Heart />
          {liked && <HeartOutline />}
        </button>
      </figure>
      <div className="px-4 mt-4 pb-4">
        <h5 className="text-xl font-semibold ">{recipe?.label}</h5>
        <div className="flex justify-between items-center mt-2 ">
          <div className="flex gap-2">
            <h6>{recipe?.totalTime} minutes</h6>
            <h6 className="capitalize">{recipe?.cuisineType}</h6>
          </div>
          <button className="text-red ">
            <BookmarkOutline />
            {bookmark && <Bookmark />}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default BigCard;
