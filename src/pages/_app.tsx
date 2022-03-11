import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import HeadSEO from '../feature/seo/HeadSEO';
import Layout from '../feature/common/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
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
