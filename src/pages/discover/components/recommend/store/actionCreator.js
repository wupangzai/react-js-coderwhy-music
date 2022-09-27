import * as actionType from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getSettleSingers,
  getNewAlbum,
} from "@/services/discover/recommend";

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

//推荐页入驻歌手
const changeSettleSingersAction = (res) => ({
  type: actionType.CHANGE_SETTLE_SINGERS,
  settleSingers: res.artists,
});

//推荐页新碟上架
const changeNewAlbumAction = (res) => ({
  type: actionType.CHANGE_NEW_ALBUMS,
  newAlbums: res.monthData,
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
      dispatch(changeHotRecommendsAction(res));
    });
  };
};

//获取推荐页入驻歌手
export const getSettleSingersAction = () => {
  return (dispatch) => {
    getSettleSingers().then((res) => {
      dispatch(changeSettleSingersAction(res));
    });
  };
};

//获取新碟上架数据
export const getNewAlubmAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      console.log(res);
      dispatch(changeNewAlbumAction(res));
    });
  };
};
