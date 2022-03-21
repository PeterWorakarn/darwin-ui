import dynamic from 'next/dynamic';
import Link from 'next/link';
// import GithubFAB from './GithubFAB';

const GithubFAB = dynamic(import('./GithubFAB'), { ssr: true });

const Layout: React.FC = (props) => {
  return (
    <>
      <nav
        style={{ backdropFilter: 'saturate(180%) blur(10px)' }}
        className="bg-white bg-opacity-10 fixed w-full h-[60px] flex items-center justify-center z-50"
      >
        <div className="w-full px-4 lg:px-0 mx-auto w-of-container h-[32px] flex justify-between">
          {/* max-w-[1210px] */}
          <Link href="/">
            <a className="w-8 h-8">
              <img alt="drawin-logo" src="/darwin.svg" className="w-8 h-8 rounded-lg" />
            </a>
          </Link>
        </div>
      </nav>
      <p className="h-[60px] w-full" />
      <div className="w-full mx-auto w-full h-full">
        {props.children}
      </div>
      <GithubFAB link="https://github.com/PeterWorakarn/darwin-ui" />
    </>

  );
};

export default Layout;
