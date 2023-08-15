import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import { Footer, Navbar } from '@/components/elements';
import { scroll } from '@/utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    scroll.init();
  }, []);

  return (
    <>
      <Head>
        <title>CrowdX</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
