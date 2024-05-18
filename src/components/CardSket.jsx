function CardSket() {
  return (
    <div className=" md:basis-44 shrink grow shadow-md ">
      <figure className="relative">
        <div
          alt="recipe-image"
          className="rounded-t-lg w-full bg-orange h-44 animate-pulse"
        ></div>
      </figure>
      <div className="py-2 px-2 flex flex-col justify-between">
        <h5 className="text-xl font-semibold h-10 md:h-16 bg-orange animate-pulse"></h5>
        <div className="flex justify-between  items-center pb-2">
          <div className="flex gap-2 text-md bg-orange animate-pulse">
            <h6 className="text-orange "></h6>
            <h6 className="capitalize"></h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSket;
