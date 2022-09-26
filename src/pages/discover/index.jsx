import React, { memo, useEffect } from "react";
import { renderRoutes } from "react-router-config";

import request from "@/services/request";

import Menu from "./components/menu";

export default memo(function Discover(props) {

  return (
    <div>
      <Menu />
      {renderRoutes(props.route.routes)}
    </div>
  );
});
