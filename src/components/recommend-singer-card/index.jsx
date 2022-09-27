import React, { memo } from "react";
import { SingerCard } from "./style";

export default memo(function RecommendSingerCard(props) {
  const { item } = props;
  return (
    <SingerCard>
      <h2>HYSettleSinger</h2>
    </SingerCard>
  );
});
