import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  .banner {
    display: flex;
    height: 270px;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;
  height: 270px;
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
