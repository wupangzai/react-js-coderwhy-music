import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "./store/actionCreator";

function Recommend(props) {
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    state => ({
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return <div>{topBanners.length}</div>;
}

export default memo(Recommend);
