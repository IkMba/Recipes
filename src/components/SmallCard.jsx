import { IoIosTimer } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetRecipes } from "../services/queries";

function SmallCard({ queryType, value }) {
  const query = `&${queryType}=${value}`;
  const { recipes } = useGetRecipes(query);

  const recipe = recipes?.[0].recipe;
  // console.log(recipe)
  const id = recipe?.uri?.split("_")[1];

  return (
    // <h2>jess</h2>

    <Link
      to={`/recipe/${id}`}
      className=" flex border-b pb-4 mb-4 border-gray-300"
    >
      <figure className="relative">
        <img
          src={recipe?.image}
          alt="recipe-image"
          className="rounded-t-lg w-24 md:w-28 "
        />
      </figure>
      <div className="px-2 ">
        <div className="flex gap-4">
          <h5 className="text-orange text-sm md:text-md">{value}</h5>
          <h6 className="flex items-center gap-1 text-gray-500 text-sm md:text-sm">
            <span>
              <IoIosTimer />
            </span>
            {recipe?.totalTime}mins
          </h6>
        </div>
        <h5 className="text-md md:text-xl font-bold">{recipe?.label}</h5>

        <h6 className="text-sm text-gray-700">{recipe?.cuisineType}</h6>
      </div>
    </Link>
  );
}

export default SmallCard;
