import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

import Menu from "./components/menu";

export default memo(function Discover(props) {
  return (
    <div>
      <Menu />
      {renderRoutes(props.route.routes)}
    </div>
  );
});
