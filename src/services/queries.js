import { useQuery } from "@tanstack/react-query";
import { getRandom, getRecipe, getRecipes } from "./apiRecipes";

export function useGetRecipes(query) {
  const {
    isLoading,
    error,
    data: recipes,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getRecipes(query),
  });

  return { isLoading, error, recipes };
}
export function useGetRecipe(id) {
  const {
    isLoading,
    error,
    data: recipe,
  } = useQuery({
    queryKey: [id],
    queryFn: () => getRecipe(id),
  });

  return { isLoading, error, recipe };
}
export function useGetRandom() {
  const {
    isLoading,
    error,
    data: recipes,
  } = useQuery({
    queryKey: ["random"],
    queryFn: getRandom,
  });

  return { isLoading, error, recipes };
}
