import * as actionType from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getSettleSingers,
  getNewAlbum,
  getDjTopList,
  getTopList,
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

//修改推荐热门主播数据action
const changeDjTopListAction = (res) => ({
  type: actionType.CHANGE_DJ_TOP_LIST,
  djTopList: res.data.list,
});

//修改推荐排行榜单数据
const changeUpRankingAction = (res) => ({
  type: actionType.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

const changeNewRankingAction = (res) => ({
  type: actionType.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRankingAction = (res) => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

//异步actions-----------------------------------------------------------

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
      dispatch(changeNewAlbumAction(res));
    });
  };
};

//获取推荐热门主播数据action
export const getDjTopListAction = (limit) => {
  return async (dispatch) => {
    const res = await getDjTopList(limit);
    dispatch(changeDjTopListAction(res));
  };
};

//获取推荐榜单排行
export const getTopListAction = (id) => {
  return async (dispatch) => {
    const res = await getTopList(id);
    console.log(res);
    switch (id) {
      case 19723756:
        dispatch(changeUpRankingAction(res));
        break;
      case 3779629:
        dispatch(changeNewRankingAction(res));
        break;
      case 2884035:
        dispatch(changeOriginRankingAction(res));
        break;
      default:
        break;
    }
  };
};
