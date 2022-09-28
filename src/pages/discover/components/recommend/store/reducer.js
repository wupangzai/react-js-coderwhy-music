import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  settleSingers: [],
  newAlbums: [],
  djTopList: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionType.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionType.CHANGE_SETTLE_SINGERS:
      return state.set("settleSingers", action.settleSingers);
    case actionType.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);
    case actionType.CHANGE_DJ_TOP_LIST:
      return state.set("djTopList", action.djTopList);
    case actionType.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionType.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionType.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    default:
      return state;
  }
}

export default reducer;
