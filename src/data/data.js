export const navItems = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Reviews",
    href: "reviews",
  },
  {
    name: "Contact",
    href: "contact",
  },
  {
    name: "Favourites",
    href: "favourites",
  },
  {
    name: "Bookmarks",
    href: "bookmarks",
  },
];

export const categories = [
  "all",
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "teatime",
];

export const cuisineTypes = [
  "American",
  "Asian",
  "British",
  "Chinese",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Mediterranean",
  "Mexican",
  "South American",
];

export const dishTypes = [
  "Biscuits and cookies",
  "Bread",
  "Cereals",
  "Condiments and sources",
  "Desserts",
  "Drinks",
  "Main course",
  "Pancake",
  "Preps",
  "Preserve",
  "Salad",
  "Sandwiches",
  "Side dish",
  "Soup",
  "Starter",
  "Sweets",
];

export const timeTypes = [
  { label: "< 5 mins", value: "5" },
  { label: "5 - 10 mins", value: "5-10" },
  { label: "10 - 30 mins", value: "10-30" },
  { label: "30 - 60 mins", value: "30-60 " },
  { label: "> 1 hour", value: "60%2B" },
];

export const dietTypes = [
  "balanced",
  "high fiber",
  "high-protein",
  "low-carb",
  "low-fat",
  "low-sodium",
];

export const caloryTypes = [
  { label: "<100", value: "100" },
  { label: "100 - 200", value: "100-200" },
  { label: "200 - 500", value: "200-500" },
  { label: "> 500", value: "500%2B" },
];

export const healthCats = [
  "alcohol-cocktail",
  "alcohol-free",
  "celery-free",
  "crustacean-free",
  "dairy-free",
  "DASH",
  "egg-free",
  "fish-free",
  " fodmap-free",
  "gluten-free",
  "immuno-supportive",
  "keto-friendly",
  "kidney-friendly",
  "kosher",
  "low-fat-abs",
  "low-potassium",
  "low-sugar",
  "lupine-free",
  "Mediterranean",
  "mollusk-free",
  "mustard-free",
  "no-oil-added",
  "paleo",
  "peanut-free",
  "pescatarian",
  "pork-free",
  "red-meat-free",
  "sesame-free",
  "shellfish-free",
  "soy-free",
  "sugar-conscious",
  "sulfite-free",
  "tree-nut-free",
  "vegan",
  "vegetarian",
  "Wheat-free",
];

export const filterButtonData = [
  {
    id: 0,
    data: cuisineTypes,
    queryString: "cuisineType",
    title: "Cuisine",
  },
  {
    id: 1,
    data: dishTypes,
    queryString: "dish",
    title: "Dish",
  },
  {
    id: 2,
    data: healthCats,
    queryString: "health",
    title: "Health",
  },
  {
    id: 3,
    data: dietTypes,
    queryString: "diet",
    title: "Diet",
  },
  {
    id: 4,
    data: timeTypes,
    queryString: "time",
    title: "Cooking time",
  },
  {
    id: 5,
    data: caloryTypes,
    queryString: "calories",
    title: "Calories",
  },
];
