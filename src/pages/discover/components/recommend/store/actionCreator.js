import * as actionType from "./constants";
import { getTopBanners, getHotRecommends } from "@/services/discover/recommend";

//修改store的action

//轮播图
const changeTopBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

//推荐页的热门推荐数据
const changeHotRecommendsAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

//异步actions

//获取轮播图
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

//获取推荐页面热门推荐数据
export const getHotRecommendsAction = () => {
  return (dispatch) => {
    getHotRecommends().then((res) => {
      console.log(res);
      dispatch(changeHotRecommendsAction(res));
    });
  };
};
