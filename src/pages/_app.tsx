import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import * as ga from 'react-ga';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HeadSEO from '../feature/seo/HeadSEO';
import Layout from '../feature/common/components/Layout';
import { gaTrackingCode } from '../config';

ga.initialize(gaTrackingCode);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Run Logic on GA
    ga.pageview(window.location.pathname);
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });

    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
      ga.pageview(window.location.pathname);
    });
  }, []);
  return (
    <>
      <HeadSEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
