import styled, { keyframes, css } from "styled-components";
import { clampBuilder } from "@/utils/clamp-generator";

const LogoAscii = () => (
  <Container role="img">
    {`         _________     ________        _________     __      __      __      __
        /\\________\\  /\\_________\\    /\\ _________\\  /\\_\\    /\\_\\    /\\_\\    /\\_\\
       / / _____  /  \\/___   ___/   / /  ________/ / / /   / / /   / / /   / / /
      / / /  / / /      / / /      / / /          / / /   / / /   / / /   / / /
     / / /__/ / /      / / /      / / /          / / /___/ / /   / / /___/ / /
    / / /____/ /      / / /      / / /          / / /_____/ /   / / /_____/ /
   / / ___   _/      / / /      / / /          / / ______  /   / / ______  /
  / / /  \\ \\ \\      / / /      / / /          / / /   / / /   / / /   / / /
 / / /   / / /  ___/ / /__    / / /______    / / /   / / /   / / /   / / /
/ / /   / / /  /\\___/ /___\\  / / /_______\\  / / /   / / /   / / /   / / /
\\/_/    \\/_/   \\__________/  \\/__________/  \\/_/    \\/_/    \\/_/    \\/_/
`}
  </Container>
);

export default LogoAscii;

const clampDefault = { minWidth: "576px", maxWidth: "1200px", root: "16" };
const gradientBg = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

const Container = styled.pre`
  font-family: "InconsolataVariable", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: ${clampBuilder({
    minFontSize: "8",
    maxFontSize: "16",
    ...clampDefault,
  })};
  line-height: 1;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.1);
  cursor: default;
  user-select: none;

  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;

  background-size: 400% 400%;
  animation: ${gradientBg} 15s linear infinite alternate;
  background-image: linear-gradient(145deg, #760b4b, #19386f, #23414a, #25494d);

  ${(props) =>
    props.theme.isDark &&
    css`
      background-image: linear-gradient(
        145deg,
        #c3f0c8,
        #509bf5,
        #fb59ba,
        #ffc867
      );
    `}
`;
