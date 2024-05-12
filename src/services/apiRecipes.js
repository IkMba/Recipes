const BASE_URL = "https://api.edamam.com/api/recipes/v2";
const apiKey = import.meta.env.VITE_API_KEY;
const apiId = import.meta.env.VITE_API_ID;

export const getRecipes = async (query) => {
  const url = `${BASE_URL}?type=public&app_id=${apiId}&app_key=${apiKey}${query}`;
  try {
    const res = await fetch(url);

    const results = await res.json();
    const data = results.hits;
    // console.log(url)

    return data;
  } catch (err) {
    return err;
  }
};
export const getRecipe = async (id) => {
  const url = `${BASE_URL}/${id}?type=public&app_id=${apiId}&app_key=${apiKey}`;
  try {
    const res = await fetch(url);

    const results = await res.json();
    const data = results.recipe;

    return data;
  } catch (err) {
    return err;
  }
};
export const getRandom = async () => {
  const url = `${BASE_URL}?type=public&app_id=${apiId}&app_key=${apiKey}&mealType=Breakfast&random=true`;
  try {
    const res = await fetch(url);

    const results = await res.json();
    const data = results.hits;
    console.log(data);
    console.log(results);
    console.log(url);

    return data;
  } catch (err) {
    return err;
  }
};
