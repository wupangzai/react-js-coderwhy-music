import React, { memo } from "react";

import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import { HotRecommendWrapper } from "./style";

export default memo(function NewAlbum() {
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title="新碟上架"></ThemeHeaderRecommend>
    </HotRecommendWrapper>
  );
});
