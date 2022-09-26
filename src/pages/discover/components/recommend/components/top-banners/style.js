import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  background: url(${(props) => props.bgcImg}) center center/6000px;
  .banner {
    display: flex;
    height: 270px;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  background-color: red;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 270px;
  background-color: blue;
  background: url(${require("@/assets/img/download.png")});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    margin-top: -26px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
