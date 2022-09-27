import styled from "styled-components";

export const NewAlbumCardWrapper = styled.div`
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  .cover {
    width: 100px;
    height: 100px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    &:hover {
      .cover-play {
        display: block;
      }
    }
    .img {
      width: 100%;
      height: 100%;
    }
    .cover-type {
      position: absolute;
      top: 0;
      left: 0;
    }
    .cover-white {
      display: block;
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
    }
    .cover-play {
      width: 16px;
      height: 17px;
      position: absolute;
      display: block;
      right: 2px;
      bottom: 2px;
      background-position: 0 0;
      display: none;
    }
  }
  .info {
    display: flex;
    width: 105px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 3px;
    .album-name {
      width: 90%;
      font-size: 12px;
      color: #000;
      font-family: Arial, Helvetica, sans-serif;
      padding-bottom: 3px;
    }
    .singer-name {
      width: 90%;

      font-size: 10px;
    }
  }
`;
