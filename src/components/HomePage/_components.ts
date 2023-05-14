import styled from "styled-components";
import { clampBuilder } from "@/utils/clamp-generator";

const clampDefault = { minWidth: "576px", maxWidth: "1200px", root: "16" };

export const Header = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: ${clampBuilder({
    minFontSize: "16",
    maxFontSize: "22",
    ...clampDefault,
  })};
  display: grid;
  place-items: end;
`;

export const Main = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  height: 100%;
  display: grid;
  place-content: center;
  gap: ${clampBuilder({
    minFontSize: "32",
    maxFontSize: "100",
    ...clampDefault,
  })};
`;

export const IconGroup = styled.div`
  margin-left: auto;
  display: flex;
  place-content: center;
  gap: 8px;
`;

const iconSize = clampBuilder({
  minFontSize: "37.5",
  maxFontSize: "52",
  ...clampDefault,
});

export const IconLink = styled.a`
  border: none;
  background: none;

  width: ${iconSize};
  height: ${iconSize};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${(props) =>
      props.theme.isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
    transition: background-color 200ms ease;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;

    path {
      fill: ${(props) => (props.theme.isDark ? "white" : "black")};
    }
  }
`;
