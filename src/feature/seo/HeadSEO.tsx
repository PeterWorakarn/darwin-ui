import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import extractPathName from './utils/extract-path';
import titleCase from './utils/title-case';

const transformPath = (path: string) => {
  if (path === '/404') return '404';
  // remove last query
  const pathname = extractPathName(path);
  // Create upper case
  return titleCase(pathname.replace(/\//g, '').replace(/-/g, ' '));
};

const HeadSEO: React.FC = () => {
  const router = useRouter();
  const overideSEO = {
    titleTemplate: '%s | Darwin UI',
    title: transformPath(router.pathname === '/' ? 'Coming soon' : router.pathname),
    canonical: router.route,
    description: 'Simple and Clean Tailwind Component with React Hook',
    additionalLinkTags:
      [
        {
          rel: 'icon',
          href: '/darwin_icon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/darwin.png',
          sizes: '76x76',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ],
    openGraph: {
      description: 'Simple and Clean Tailwind Component with React Hook',
      images: [
        {
          url: '/img/og-image.png',
          width: 800,
          height: 600,
          alt: 'Darwin UI',
        },
      ],
      url: 'https://darwin.peter-o.tech',
      type: 'website',
      locale: 'en_IE',
      site_name: 'Darwin UI',
    },
    twitter: {
      cardType: 'summary_large_image',
      title: 'Darwin UI',
      description: 'Simple and Clean Tailwind Component with React Hook',
      image: '/img/og-image.png',
    },
  };
  return (
    <>
      <NextSeo {...overideSEO} />
    </>
  );
};

export default HeadSEO;
