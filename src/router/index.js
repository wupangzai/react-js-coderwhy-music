import React from "react";

import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover"></Redirect>,
  },
  {
    path: "/discover",
    component: Discover,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;
