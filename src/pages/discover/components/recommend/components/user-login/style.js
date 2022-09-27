import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  width: 100%;
  height: 126px;
  background-position: 0 0;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .description {
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
      color: #666;
    }

    .login {
      display: block;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      background-position: 0 -195px;
      text-decoration: none;
      color: #fff;
    }
  }
`;
