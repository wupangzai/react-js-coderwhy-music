import React, { memo } from "react";

import { renderRoutes } from "react-router-config";
import routes from "./router";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

function App(props) {
  return (
    <div className="App">
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </div>
  );
}

export default memo(App);
