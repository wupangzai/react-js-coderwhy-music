import React, { memo } from "react";

import { HeaderWrapper } from "./style";

export default memo(function ThemeHeaderRecommend(props) {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => (
            <div className="item" key={item}>
              <a href="todo">{item}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
