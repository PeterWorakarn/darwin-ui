import Link from 'next/link';
import GithubFAB from './GithubFAB';

const Layout: React.FC = (props) => {
  return (
    <>
      <nav
        style={{ backdropFilter: 'saturate(180%) blur(10px)' }}
        className="bg-white bg-opacity-10 fixed w-full h-[60px] flex items-center justify-center z-50"
      >
        <div className="w-full px-4 mx-auto max-w-[1210px] h-[32px] flex justify-between">
          <Link href="/">
            <a className="w-8 h-8 bg-primary-red rounded-sm">
              <div className="w-8 h-8 bg-primary-red rounded-sm" />
            </a>
          </Link>
        </div>
      </nav>
      <p className="h-[60px] w-full" />
      <main className="w-full mx-auto max-w-[1210px] px-4 py-2 h-[150vh]">
        {props.children}
      </main>
      <GithubFAB link="https://github.com/PeterWorakarn/drawin-ui" />
    </>

  );
};

export default Layout;
