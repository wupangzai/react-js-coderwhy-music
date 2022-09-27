import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ThemeSubHeaderRecommend from "../../../../../../components/theme-sub-header-recommend";
import { getSettleSingersAction } from "../../store/actionCreator";
import RecommendSingerCard from "@/components/recommend-singer-card";
import { SettleSingersWrapper } from "./style";

export default memo(function SettleSingers() {
  //redux hooks
  const dispacth = useDispatch();
  const { settleSingers } = useSelector(
    (state) => ({
      settleSingers: state.getIn(["recommend", "settleSingers"]),
    }),
    shallowEqual
  );
  //other hooks
  useEffect(() => {
    dispacth(getSettleSingersAction());
  }, [dispacth]);

  return (
    <SettleSingersWrapper>
      <ThemeSubHeaderRecommend title="入驻歌手" right="查看全部" />
      <div className="content">
        {settleSingers?.map((item) => (
          <RecommendSingerCard item={item} key={item.id} />
        ))}
      </div>
      <a className="applyMusician" href="#todo">
        申请成为网易音乐人
      </a>
    </SettleSingersWrapper>
  );
});
