import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  width: 230px;
  color: #333;
  .top {
    height: 100px;
    display: flex;
    padding: 20px 0 0 20px;

    .img-content {
      position: relative;
      width: 80px;
      height: 80px;
      & a {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 80px;
        height: 80px;
        background-position: -145px -57px;
      }
    }

    & img {
      width: 80px;
      height: 80px;
    }
    .description {
      margin: 6px 0 0 10px;
      display: flex;
      flex-direction: column;
      .title {
        color: #333;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 8px;
      }
      .btn a {
        display: block;
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
      .btn {
        display: flex;
        .play {
          background-position: -267px -205px;
        }
        .collect {
          background-position: -300px -205px;
        }
      }
    }
  }

  .ranking-list {
    height: 319px;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    position: relative;
    .list-item {
      height: 32px;
      line-height: 32px;
      position: relative;
      display: flex;

      &:hover {
        .btn-action {
          display: flex;
        }

        .name {
          flex: 0.6;
        }
      }
      .top-item {
        color: #c10d0c;
      }
      .index {
        display: inline-block;
        text-align: center;
        width: 15px;
        margin-left: 35px;
        font-size: 16px;
      }
      .name {
        color: #000;
        padding-left: 10px;
        flex: 1;
      }

      .btn-action {
        display: flex;
        position: absolute;
        right: 2px;
        top: 50%;
        transform: translateY(-50%);
        justify-content: space-between;
        width: 70px;
        display: none;
      }

      .action {
        display: block;
        width: 17px;
        height: 17px;
      }

      .play {
        background-position: -267px -268px;
      }

      .add {
        background-position: 0 -700px;
        margin-top: 2px;
      }

      .collect {
        background-position: -297px -268px;
      }
    }

    .bottom-link {
      line-height: 32px;
      position: absolute;
      right: 5px;
      bottom: -35px;
    }
  }
`;
