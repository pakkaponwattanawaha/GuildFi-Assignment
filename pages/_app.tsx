import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "components/NavBar";
import { ReactNode } from "react";
import { NextPage } from "next";
type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <NavBar account={""} />
      {getLayout(<Component className="" {...pageProps} />)}
    </>
  );
}

export default MyApp;
