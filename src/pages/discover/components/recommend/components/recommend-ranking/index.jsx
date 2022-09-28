import React, { memo, useEffect } from "react";
import TopRanking from "../../../../../../components/recommend-top-ranking";
import { getTopListAction } from "../../store/actionCreator";
import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import { HotRecommendWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function RecommendRanking() {
  //redux hooks
  const dispatch = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title="榜单"></ThemeHeaderRecommend>
      <div className="content">
        <TopRanking item={upRanking}></TopRanking>
        <TopRanking item={newRanking}></TopRanking>
        <TopRanking item={originRanking}></TopRanking>
      </div>
    </HotRecommendWrapper>
  );
});
