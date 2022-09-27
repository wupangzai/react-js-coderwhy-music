import styled from "styled-components";

export const SubHeaderWrapper = styled.div`
  height: 23px;
  margin: 10px 20px;
  border-bottom: 1px solid #ccc;
  color: #333;

  .content {
    display: flex;
    justify-content: space-between;
    .title {
      color: #333;
      font-weight: bold;
    }
    .right {
      color: #666;
    }
  }
`;
