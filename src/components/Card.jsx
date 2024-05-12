import { MdOutlineChevronRight } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { image, totalTime, label, cuisineType, uri } = item.recipe;
  const id = uri.split("_")[1];
  const hour = Math.round(totalTime / 60);
  const mins = totalTime % 60;

  const time =
    totalTime > 60
      ? `${hour} hour ${mins > 1 ? mins + "mins" : ""}`
      : totalTime + " mins";

  const last = item[item.length - 1];
  if (last)
    return (
      <div>
        <h4>see more</h4>
      </div>
    );

  return (
    <Link to={`/recipe/${id}`} className=" md:basis-44 shrink grow shadow-md">
      <figure className="relative">
        <img src={image} alt="recipe-image" className="rounded-t-lg w-full" />
        <FaRegHeart className="absolute right-4 top-3 text-red-400" />
      </figure>
      <div className="py-2 px-2 flex flex-col justify-between">
        <h5 className="text-xl font-semibold h-10 md:h-16">
          {label.length > 30 ? label.slice(0, 25) + "..." : label}
        </h5>
        <div className="flex justify-between  items-center pb-2">
          <div className="flex gap-2 text-md">
            <h6 className="text-orange">{time} </h6>
            <h6 className="capitalize">{cuisineType}</h6>
          </div>
          <CiBookmark />
        </div>
      </div>
    </Link>
  );
}

export function ShowMoreCard() {
  return (
    <div className="basis-44 shrink grow  bg-grey">
      <p>
        Show more
        <span>
          <MdOutlineChevronRight />
        </span>
      </p>
    </div>
  );
}
export default Card;
