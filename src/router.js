import { lazy } from "react";
// const Home = lazy(() => import("./Component/templet/home"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const MainCategory = lazy(() => import("./pages/category.js/index"));
const Login = lazy(() => import("./Component/login/login"));
const About = lazy(() => import("./pages/about/about"));
const shopByCategory = lazy(() => import("./pages/shop/show-items-by-id"));
const ShopByRecipes = lazy(() => import("./pages/shop/shop-by-recipes"));
const ShopByItems = lazy(() => import("./pages/shop/shop-by-items"));
const Productdetails = lazy(() => import("./Component/templet/Productdetails"));
const RecipesDetails = lazy(() => import("./Component/templet/RecipesDetails"));
const searchresult = lazy(() => import("./pages/shop/searchresult"));
const routes = [
  { path: "/", exact: true, component: MainCategory },
  { path: "/checkout", exact: true, component: Checkout },
  { path: "/category", exact: true, component: MainCategory },
  { path: "/login", exact: true, component: Login },
  { path: "/about", exact: true, component: About },
  { path: "/show-items-with-id", exact: true, component: shopByCategory },
  { path: "/shop-by-recipes", exact: true, component: ShopByRecipes },
  { path: "/shop-by-items", exact: true, component: ShopByItems },
  { path: "/product-details", exact: true, component: Productdetails },
  { path: "/recipe-details", exact: true, component: RecipesDetails },
  { path: "/search-results", exact: true, component: searchresult },
];

export default routes;
