import BigCard from "./BigCard";
import Search from "./Search";
import SmallCard from "./SmallCard";

function HomeFeatures() {
  return (
    <div className="pr-8 pl-8 py-6 lg:pl-16 md:pr-12 lg:pr-36 lg:px-32">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl pb-4 font-bold font-gatile">
          Features
        </h1>
        <Search />
      </div>
      <div className="flex flex-col gap-12 md:flex-row lg:gap-16">
        <BigCard />
        <div className="md:basis-[24rem] lg:basis-[32rem]">
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
