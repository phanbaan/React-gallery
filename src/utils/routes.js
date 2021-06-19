import Gallery from "../page/Gallery";
import Home from "../page/Home";
import Login from "../page/Login";

export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/login",

    component: () => <Login />,
  },
  {
    path: "/gallery",
    component: () => <Gallery />,
  },
];
