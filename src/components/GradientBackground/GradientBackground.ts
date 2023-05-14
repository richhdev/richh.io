import styled, { keyframes } from "styled-components";

const gradientBg = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 0 20vw rgb(0 0 0 / 5%);
  background-size: 400% 400%;
  background-image: ${(props) =>
    props.theme.isDark
      ? `linear-gradient(145deg, #760b4b, #19386f, #23414a, #25494d)`
      : `linear-gradient(145deg, #c3f0c8, #509bf5, #fb59ba, #ffc867)`};
  animation: ${gradientBg} 30s linear infinite alternate;
`;
