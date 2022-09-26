import React, { memo } from "react";

import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import { HotRecommendWrapper } from "./style";

export default memo(function HotRecommend() {
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
        title="热门推荐"
      ></ThemeHeaderRecommend>
    </HotRecommendWrapper>
  );
});
