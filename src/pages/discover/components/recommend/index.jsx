import React, { memo } from "react";
import TopBanners from "./components/top-banners";
import HotRecommends from "./components/hot-recommends";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommends></HotRecommends>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);
