import React, { memo } from "react";

import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import { HotRecommendWrapper } from "./style";

export default memo(function RecommendRanking() {
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title="榜单"></ThemeHeaderRecommend>
    </HotRecommendWrapper>
  );
});
