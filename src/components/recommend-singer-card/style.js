import styled from "styled-components";

export const SingerCard = styled.a`
  text-decoration: none;

  width: 210px;
  height: 62px;
  background: #fafafa;
  display: flex;
  margin: 15px 20px;
  cursor: pointer;

  .img {
    width: 62px;
    height: 62px;
  }

  .info {
    padding-left: 14px;
    display: flex;
    width: 100%;
    height: 62px;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e9e9e9;
    border-left: none;
    .name {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }
  }
`;
