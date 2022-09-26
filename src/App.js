import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import store from "./store";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </div>
    </Provider>
  );
}

export default memo(App);
