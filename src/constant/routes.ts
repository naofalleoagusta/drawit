import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));

export type RouteType = {
  path: string;
  component: React.LazyExoticComponent<any>;
  exact: boolean;
  isPrivate: boolean;
};

const routes: RouteType[] = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
];

export default routes;
