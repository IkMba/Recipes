import BigCard from "./BigCard";
import Search from "./Search";
import SmallCard from "./SmallCard";

function HomeFeatures() {
  return (
    <div className="pr-8 pl-8 py-6 md:px-18 lg:px-24 xl:px-36 ">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl font-bold font-gatile">Features</h1>
        <Search />
      </div>
      <div className="flex flex-col gap-12 md:flex-row lg:gap-16">
        <BigCard />
        <div className="md:basis-[22rem] lg:basis-[32rem]">
          <SmallCard queryType="diet" value="low-carb" />
          <SmallCard queryType="health" value="Mediterranean" />

          <SmallCard queryType="cuisineType" value="Asian" />
          <SmallCard queryType="mealType" value="Breakfast" />
          {/* <SmallCard queryType='dishType' value='Desserts'/> */}
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
