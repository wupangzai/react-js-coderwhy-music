import { Carousel } from "antd";
import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import NewAlbumCard from "@/components/recommend-newAlbum-card";
import ThemeHeaderRecommend from "../../../../../../components/theme-header-recommend";
import { getNewAlubmAction } from "../../store/actionCreator";
import { HotRecommendWrapper } from "./style";

export default memo(function NewAlbum() {
  //redux  hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  //other hooks
  const carouselRef = useRef();

  useEffect(() => {
    dispatch(getNewAlubmAction(10));
  }, [dispatch]);

  const handleCarousel = (arr, from, to) => {
    return arr.filter((item, index) => {
      return index >= from && index < to;
    });
  };

  //业务代码
  const firstItem = newAlbums ? handleCarousel(newAlbums, 0, 5) : [];

  const secondItem = newAlbums ? handleCarousel(newAlbums, 5, 10) : [];

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title="新碟上架"></ThemeHeaderRecommend>
      <div className="content">
        <Carousel className="carousel" ref={carouselRef} dots={false}>
          <div className="album-list">
            {firstItem &&
              firstItem.map((item, index) => (
                <div className="item" key={item.id}>
                  <NewAlbumCard item={item}></NewAlbumCard>
                </div>
              ))}
          </div>
          <div className="album-list" style={{ display: "flex !important" }}>
            {secondItem &&
              secondItem.map((item, index) => (
                <div className="item" key={item.id}>
                  <NewAlbumCard item={item}></NewAlbumCard>
                </div>
              ))}
          </div>
        </Carousel>
        <div
          className="arrow left sprite_02"
          onClick={() => carouselRef.current.prev()}
        ></div>
        <div
          className="arrow right sprite_02"
          onClick={() => carouselRef.current.next()}
        ></div>
      </div>
    </HotRecommendWrapper>
  );
});
