import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import HomeFeatures from "./components/HomeFeatures";
import MealType from "./components/MealType";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RecipesPage from "./pages/RecipesPage";
import DetailsPage from "./pages/DetailsPage";
import HealthPage from "./pages/HealthPage";
import SavedListPage from "./pages/SavedListPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,

        children: [
          {
            path: "/",
            element: <HomeFeatures />,
          },
          {
            path: "/all",
            element: <HomeFeatures />,
          },
          {
            path: "/:meals",
            element: <MealType />,
          },
        ],
      },
      {
        path: "/recipes/:recipe",
        element: <RecipesPage />,
      },
      {
        path: "/health/:recipe",
        element: <HealthPage />,
      },
      {
        path: "/recipe/:id",
        element: <DetailsPage />,
      },
      {
        path: "/saved/:list",
        element: <SavedListPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
