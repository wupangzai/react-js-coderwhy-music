import styled from "styled-components";

export const HotRecommendWrapper = styled.div`
  .content {
    position: relative;
    width: 100%;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;

    .arrow {
      width: 17px;
      height: 17px;

      top: 50%;
      transform: translateY(-120%);
    }
    .left {
      position: absolute;
      background-position: -260px -75px;
      left: 2px;

      &:hover {
        cursor: pointer;
      }
    }

    .right {
      position: absolute;
      background-position: -300px -75px;
      right: 2px;

      &:hover {
        cursor: pointer;
      }
    }

    /* .ant-carousel .slick-slide {
      height: 150px;
      overflow: hidden;
    } */

    .carousel {
      .album-list {
        display: flex !important;
        height: 186px;
        margin-left: -5px;
        align-items: center;
      }
    }
  }
`;
