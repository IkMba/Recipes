import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getBookmarks, getFavourites } from "../slices/appSlice";
import Card from "./Card";

function SavedList() {
  const { list } = useParams();

  const bookmarks = useSelector(getBookmarks);
  const favourites = useSelector(getFavourites);
  const recipes =
    list === "bookmarks" ? bookmarks : list === "favourites" ? favourites : "";
  console.log(recipes);

  if (recipes.length === 0)
    return (
      <h3 className="text-xl m-16 ">
        There are no recipes in {list}. Please add a recipe.{" "}
      </h3>
    );

  return (
    <div className=" px-8 pt-6 md:pl-16 md:pr-16 ">
      <h2 className="text-3xl font-gatile capitalize mb-4 text-orange">
        {list}
      </h2>
      <div className="flex flex-wrap gap-4">
        {recipes.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default SavedList;
