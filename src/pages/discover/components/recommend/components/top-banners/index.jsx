import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import { getTopBannerAction } from "../../store/actionCreator";

import { TopBannerWrapper, BannerLeft, BannerRight } from "./style";

export default memo(function TopBanners() {
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    state => ({
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  //获取轮播图数据
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <TopBannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay={true}>
            {topBanners.map(item => (
              <div className="banner-item" key={item.imageUrl}>
                <img
                  className="image"
                  src={item.imageUrl}
                  alt={item.typeTitle}
                />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
    </TopBannerWrapper>
  );
});
