import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface THeaderBlock {
  title: string;
  short: string;
  markDown: string;
}

const HeaderBlock: React.FC<THeaderBlock> = (props) => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <Link href="/components">
            <a className="header__category">COMPONENT</a>
          </Link>
          <h1 className="header__heading">
            {props.title}
          </h1>
          <p className="header__tagline">
            {props.short}
          </p>
        </div>
      </div>
      <ReactMarkdown className="description">
        {props.markDown}
      </ReactMarkdown>
    </>
  );
};

export default HeaderBlock;
