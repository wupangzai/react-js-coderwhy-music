import React, { memo } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import { MenuWrapper, TopMenu } from "./style";

import { dicoverMenu } from "./config";

export default memo(function Menu() {
  return (
    <MenuWrapper>
      <TopMenu className="wrap-v1">
        {dicoverMenu.map((item) => (
          <div className="item" key={item.link}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </div>
        ))}
      </TopMenu>
    </MenuWrapper>
  );
});
