import { MdOutlineChevronRight } from "react-icons/md";

import { Link } from "react-router-dom";

import Img from "./LazyImage";
import formatTime from "../hooks/functs";

import LovedIcon from "./LovedIcon";
import BookmarkIcon from "./BookmarkIcon";

function Card({ item }) {
  const { image, totalTime, label, cuisineType, uri } = item;
  const id = uri.split("_")[1];
  const last = item[item.length - 1];

  if (last)
    return (
      <div>
        <h4>see more</h4>
      </div>
    );

  return (
    <Link
      to={`/recipe/${id}`}
      className=" basis-44 md:basis-44 md:max-w-[16rem] grow shadow-md"
    >
      <figure className="relative">
        <Img
          src={image}
          alt="recipe-image"
          className={`rounded-lg w-full h-44 `}
        />
        <button className="absolute right-4 top-3 text-red-400">
          <LovedIcon item={item} />
        </button>
      </figure>
      <div className="py-2 px-2 flex flex-col justify-between">
        <h5 className="text-xl font-semibold h-10 md:h-16">
          {label.length > 30 ? label.slice(0, 25) + "..." : label}
        </h5>
        <div className="flex justify-between  items-center pb-2">
          <div className="flex gap-2 text-md">
            <h6 className="text-orange">{formatTime(totalTime)} </h6>
            <h6 className="capitalize">{cuisineType}</h6>
          </div>
          <BookmarkIcon item={item} />
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
