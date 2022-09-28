import React, { memo } from "react";
import { AnchorCardWrapper } from "./style";

export default memo(function AnchorCard(props) {
  const { item } = props;
  return (
    <AnchorCardWrapper>
      <img src={item.avatarUrl} alt="" />
      <div className="info">
        <a href="#todo" className="name">
          {item.nickName}
        </a>
        <p className="description">粉丝: {item.userFollowedCount}</p>
      </div>
    </AnchorCardWrapper>
  );
});
