import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga4';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HeadSEO from '../feature/seo/HeadSEO';
import Layout from '../feature/common/components/Layout';

ReactGA.initialize([
  {
    trackingId: 'G-NJNQ2BJQED',
  },
]);

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Run Logic on GA
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });

    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
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
