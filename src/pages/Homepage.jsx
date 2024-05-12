import { Outlet } from "react-router";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import HealthCats from "../components/HealthCats";

function Homepage() {
  return (
    <div>
      <div className="absolute bg-pink top-0 pt-20  md:pt-24 left-0 right-0">
        <Hero />
        <Categories />
      </div>
      <main className="mt-44 md:mt-56 lg:mt-44">
        <Outlet />
      </main>
      <HealthCats />
    </div>
  );
}

export default Homepage;
