import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import { getTopBannerAction } from "./store/actionCreator";

function Recommend(props) {
  const { getBanners } = props;
  useEffect(() => {
    getBanners();
  }, [getBanners]);
  return <div>{props.topBanners.length}</div>;
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners,
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
