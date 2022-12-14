import type { NextPage } from "next";
import Head from "next/head";

import { WelcomeCover } from "components/WelcomeCover";
import { MainCanvas } from "components/MainCanvas";

const Home: NextPage = () => {
  return (
    <div className="mainContainer relative">
      <Head>
        <title>Map of Runeterra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainCanvas />
      <WelcomeCover />
    </div>
  );
};

export default Home;
