import { useParams } from "react-router";
import { categories } from "../data/data";
import { NavLink } from "react-router-dom";

function Categories() {
  const params = useParams();

  return (
    <div
      className={`relative bg-white w-fit mx-auto -bottom-4 md:-bottom-5 py-1 md:py-2 px-2 shadow-md`}
    >
      {categories.map((item, i) => (
        <NavLink
          to={`/${item}`}
          key={item}
          className={`px-2 md:px-6 py-1   capitalize text-sm md:text-lg ${
            item === params?.meals ? "bg-black text-white rounded" : ""
          } ${i === 0 && !params.meals ? "bg-black text-white rounded" : ""}`}
        >
          {item}
        </NavLink>
      ))}
    </div>
  );
}

export default Categories;
