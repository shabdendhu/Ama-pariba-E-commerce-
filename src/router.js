import { lazy } from "react";
const Home = lazy(() => import("./Component/templet/home"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const MainCategory = lazy(() => import("./pages/category.js/index"));
const Login = lazy(() => import("./Component/login/login"));
const About = lazy(() => import("./pages/about/about"));
const shopByCategory = lazy(() => import("./pages/shop/shop-by-category"));

const routes = [
	{ path: "/", exact: true, component: Home },
	{ path: "/checkout", exact: true, component: Checkout },
	{ path: "/category", exact: true, component: MainCategory },
	{ path: "/login", exact: true, component: Login },
	{ path: "/about", exact: true, component: About },
	{ path: "/shopby-category", exact: true, component: shopByCategory },
];

export default routes;
