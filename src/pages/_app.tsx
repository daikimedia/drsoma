import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/styles.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import React from "react";
import * as gtag from "@/utils/gtag";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className="flex flex-col w-full">
        <Head>
          <link rel="icon" type="image/ico" href={"/favicon.ico"} />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
