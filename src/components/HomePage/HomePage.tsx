import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalMeta from "@/components/GlobalMeta";
import { themeDark, themeLight } from "@/theme";
import ThemeSwitch from "@/components/ThemeSwitch";
import GradientBackground from "@/components/GradientBackground";
import { Header, Main, IconGroup, IconLink } from "./_components";
import GithubSvg from "@/images/github-icon.svg";
import Tagline from "@/components/Tagline";
import LogoAscii from "../LogoAscii";

export default function Home() {
  const [theme, setTheme] = useState(themeLight);
  const [themeSwitch, setThemeSwitch] = useState<"auto" | "light" | "dark">(
    "auto"
  );

  useEffect(() => {
    const themeMap = {
      auto: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themeDark
        : themeLight,
      light: themeLight,
      dark: themeDark,
    };
    setTheme(themeMap[themeSwitch]);
  }, [themeSwitch]);

  return (
    <>
      <Head>
        <title>Richhhhhh</title>
        <meta name="description" content="Richhhhhh" />
        <GlobalMeta />
      </Head>

      <ThemeProvider theme={theme}>
        <Header>
          <IconGroup>
            <IconLink
              href="https://github.com/richhdev"
              target="_blank"
              aria-label="github"
            >
              <GithubSvg role="img" alt="github" />
            </IconLink>
            <IconLink as="button" aria-labelledby="themeSwitchLabel">
              <span className="sr-only">Change Theme</span>
              <ThemeSwitch callback={setThemeSwitch} />
            </IconLink>
          </IconGroup>
        </Header>

        <Main>
          <LogoAscii />
          <Tagline text={"<FrontEndDeveloper />"} />
        </Main>

        <GradientBackground />
      </ThemeProvider>
    </>
  );
}
