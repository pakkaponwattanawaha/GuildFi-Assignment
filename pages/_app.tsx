import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "components/NavBar";
import { ReactNode, useState, useEffect } from "react";
import { NextPage } from "next";
import { ethers } from "ethers";
import { WalletConnectFallback } from "components/WalletConnectFallback";

type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
declare var window: any;
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const [account, setAccount] = useState<string>("");

  const checkExistingConnection = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    if (accounts.length > 0) setAccount(accounts[0]);
  };
  useEffect(() => {
    checkExistingConnection();
    if (!window.ethereum) {
      return;
    }
    const accountWasChanged = (accounts: string[]) => {
      setAccount(accounts[0]);
    };

    const getAndSetAccount = async () => {
      const changedAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(changedAccounts[0]);
    };
    const clearAccount = () => {
      setAccount("");
    };

    window.ethereum.on("accountsChanged", accountWasChanged);
    window.ethereum.on("connect", getAndSetAccount);
    window.ethereum.on("disconnect", clearAccount);
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: any) => {
        console.log("accounts", accounts);
      });
  }, [account]);

  return (
    <>
      <NavBar account={account} />
      {account ? (
        getLayout(<Component className="" {...pageProps} />)
      ) : (
        <WalletConnectFallback />
      )}
    </>
  );
}

export default MyApp;
