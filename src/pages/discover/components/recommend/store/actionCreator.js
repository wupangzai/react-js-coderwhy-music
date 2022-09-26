import * as actionType from "./constants";
import { getTopBanners } from "@/services/discover/recommend";

const changeTopBannerAction = res => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
      dispatch(changeTopBannerAction(res));
    });
  };
};
