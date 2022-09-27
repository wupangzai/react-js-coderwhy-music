import React, { memo } from "react";
import { SingerCard } from "./style";

export default memo(function RecommendSingerCard(props) {
  const { item } = props;
  return (
    <SingerCard>
      <img className="img" src={item.img1v1Url} alt=""></img>
      <div className="info">
        <div className="name">{item.name}</div>
        <div className="alias">{item.alias[0]}</div>
      </div>
    </SingerCard>
  );
});
