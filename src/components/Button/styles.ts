import styled from "styled-components";

const StyledButton = styled.button`
  padding: 13px 80px;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  color: #ffffff;
  text-align: center;
  background: #2ed2c9;
  &:hover {
    background: #2cb3ac;
  }
  &:active {
    background: #2d7a77;
    box-shadow: 2px 2px 10px #0f3b3a;
  }
`;

export { StyledButton };
