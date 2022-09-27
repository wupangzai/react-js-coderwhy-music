import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanners from "./components/top-banners";
import HotRecommends from "./components/hot-recommends";
import NewAlbum from "./components/new-album";
import RecommendRanking from "./components/recommend-ranking";
import UserLogin from "./components/user-login";
import SettleSingers from "./components/settle-singers";

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommends></HotRecommends>
          <NewAlbum></NewAlbum>
          <RecommendRanking></RecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin></UserLogin>
          <SettleSingers></SettleSingers>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);
