import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  settleSingers: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case action.type:
      return state.set("hotRecommends", action.hotRecommends);
    case actionType.CHANGE_SETTLE_SINGERS:
      return state.set("settleSingers", action.settleSingers);
    default:
      return state;
  }
}

export default reducer;
