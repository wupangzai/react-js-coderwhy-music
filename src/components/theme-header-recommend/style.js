import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;
  height: 33px;
  background-position: -225px -156px;
  background-color: #fff;

  .left {
    display: flex;
    align-items: center;
    padding-left: 30px;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-weight: 600;
      margin-right: 20px;
    }
    .keyword {
      display: flex;
      align-items: center;

      .item {
        padding: 3px 10px 0px 0px;

        &:not(:last-child) {
          ::after {
            content: "|";
            color: #ccc;
            padding-left: 10px;
          }
        }

        /* &:last-child {
          ::after {
            content: "|";
            color: #ccc;
            padding-left: 10px;
          }
        } */
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
