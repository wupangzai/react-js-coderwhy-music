import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendsAction } from "../../store/actionCreator";
import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import { HotRecommendWrapper } from "./style";
import SongsCover from "../../../../../../components/songs-cover";

export default memo(function HotRecommend() {
  //redux hooks
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction());
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
        title="热门推荐"
      />
      <div className="recommend-list">
        {hotRecommends?.map((item, index) => (
          <SongsCover item={item} key={item.id} />
        ))}
      </div>
    </HotRecommendWrapper>
  );
});
