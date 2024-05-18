import { LuHeart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  deleteFavourite,
  getFavourites,
} from "../slices/appSlice";
import { useState } from "react";

function LovedIcon({ item, size }) {
  const [loved, setLoved] = useState(false);
  const dispatch = useDispatch();
  const favourites = useSelector(getFavourites);
  console.log(favourites);

  const handleFavourites = (e, item) => {
    e.preventDefault();
    setLoved((loved) => !loved);
    {
      favourites.includes(item)
        ? dispatch(deleteFavourite(item.label))
        : dispatch(addFavourite(item));
      // navigate("/saved/bookmarks");
    }
  };
  return (
    <LuHeart
      stroke="#D39738"
      fill={loved || favourites.includes(item) ? "#D39738" : "transparent"}
      size={size ? size : "20px"}
      onClick={(e) => handleFavourites(e, item)}
    />
  );
}

export default LovedIcon;
