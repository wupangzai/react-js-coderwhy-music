import * as actionType from "./constants";
import { getTopBanners } from "@/services/discover/recommend";

//修改store的action
const changeTopBannerAction = res => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

//异步thunk
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
      dispatch(changeTopBannerAction(res));
    });
  };
};
