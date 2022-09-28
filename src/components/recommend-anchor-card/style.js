import styled from "styled-components";

export const AnchorCardWrapper = styled.div`
  display: flex;
  & img {
    width: 40px;
    height: 40px;
  }
  .info {
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name {
    color: #000;
  }
  margin-bottom: 15px;
`;
