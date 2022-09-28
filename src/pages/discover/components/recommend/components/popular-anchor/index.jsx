import React, { memo, useEffect } from "react";
import { PopularAnchorWrapper } from "./style";
import ThemeSubHeaderRecommend from "@/components/theme-sub-header-recommend";
import AnchorCard from "@/components/recommend-anchor-card";
import { getDjTopListAction } from "../../store/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default memo(function PopularAnchor() {
  //redux hooks
  const dispatch = useDispatch();
  const { djTopList } = useSelector((state) => ({
    djTopList: state.getIn(["recommend", "djTopList"]),
  }));

  //other hooks
  useEffect(() => {
    dispatch(getDjTopListAction(10));
  }, [dispatch]);

  return (
    <PopularAnchorWrapper>
      <ThemeSubHeaderRecommend title="热门主播"></ThemeSubHeaderRecommend>
      <div className="content-list">
        {djTopList.map((item) => (
          <AnchorCard item={item} key={item.id}></AnchorCard>
        ))}
      </div>
    </PopularAnchorWrapper>
  );
});
