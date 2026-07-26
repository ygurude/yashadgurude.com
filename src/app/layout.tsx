import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "./spatial.css";

import classNames from "classnames";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, style } from "@/app/resources";

import { DM_Sans, Source_Code_Pro } from "next/font/google";

import { person, home } from "@/app/resources/content";
import { Column, Flex, ToastProvider } from "@/once-ui/components";
import { Analytics } from "@vercel/analytics/next";

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: home.title,
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: "Portfolio website showcasing my work.",
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const primary = DM_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(primary.variable, code.variable)}
    >
      <ToastProvider>
        <Column
          style={{ minHeight: "100vh", background: "transparent" }}
          as="body"
          fillWidth
          margin="0"
          padding="0"
        >
          <Analytics />
          <Header />
          <Flex
            position="relative"
            zIndex={0}
            fillWidth
            paddingY="0"
            paddingX="0"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </ToastProvider>
    </Flex>
  );
}
