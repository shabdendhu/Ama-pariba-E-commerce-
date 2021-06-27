import { lazy } from "react";
// const Home = lazy(() => import("./Component/templet/home"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Home = lazy(() => import("./pages/home/index"));
const Login = lazy(() => import("./Component/login/authorization"));
const About = lazy(() => import("./pages/about/about"));
const shopByCategory = lazy(() => import("./pages/shopby/show-items-by-id"));

const ShopByItems = lazy(() => import("./pages/shopby/shop-by-items"));
const Productdetails = lazy(() => import("./Component/Product/Productdetails"));
const searchresult = lazy(() => import("./pages/shopby/searchresult"));
const categoty = lazy(() => import("./pages/shop-by-category.js/index"));
const MyAccount = lazy(() => import("./pages/profile/my-account"));
const MyHistory = lazy(() => import("./pages/history/my-history"));
const NotForBigschreen=lazy(()=>import("./Component/templet/notForBigschreen"))
const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/checkout", exact: true, component: Checkout },
  { path: "/shop-by-category", exact: true, component: categoty },
  { path: "/login", exact: true, component: Login },
  { path: "/about", exact: true, component: About },
  { path: "/show-items-with-id", exact: true, component: shopByCategory },
  { path: "/shop-by-items", exact: true, component: ShopByItems },
  { path: "/product-details", exact: true, component: Productdetails },
  // { path: "/search-results", exact: true, component: searchresult },
  { path: "/search-results", exact: true, component: searchresult },
  { path: "/my-account", exact: true, component: MyAccount },
  { path: "/my-history", exact: true, component: MyHistory },
  { path: "/large-schreen-detected", exact: true, component: NotForBigschreen },
];

export default routes;
