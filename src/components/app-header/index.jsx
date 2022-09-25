import React, { memo } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import { Input } from "antd";

import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "./config";

import { HeaerWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function AppHeader() {
  const renderHeaderLink = (item, index) => {
    return index < 3 ? (
      <NavLink to={item.link} exact>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    ) : (
      <a href={item.link}>{item.title}</a>
    );
  };

  return (
    <HeaerWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="sprite_01 logo">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => (
              <div key={item.title} className="select-item">
                {renderHeaderLink(item, index)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          ></Input>
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider" />
    </HeaerWrapper>
  );
});
