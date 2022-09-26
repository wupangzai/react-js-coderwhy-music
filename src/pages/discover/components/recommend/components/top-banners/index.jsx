import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";

import { getTopBannerAction } from "../../store/actionCreator";

import {
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style";

export default memo(function TopBanners() {
  //state
  const [current, setCurrent] = useState(0);

  //与redux的交互
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  //hooks

  //获取轮播图实例
  const bannerRef = useRef();

  //轮播图背景切换
  const changeBgcImg = useCallback((from, to) => {
    setCurrent(to);
  }, []);

  //获取轮播图数据
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  //业务逻辑
  const bgcImgUrl = topBanners[current]?.imageUrl + "?imageView&blur=40x20";

  return (
    <TopBannerWrapper bgcImg={bgcImgUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay={true}
            ref={bannerRef}
            beforeChange={(from, to) => changeBgcImg(from, to)}
          >
            {topBanners.map((item) => (
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
        <BannerControl>
          <button
            className="btn left"
            onClick={() => {
              bannerRef.current.prev();
            }}
          ></button>
          <button
            className="btn right"
            onClick={() => {
              bannerRef.current.next();
            }}
          ></button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  );
});
