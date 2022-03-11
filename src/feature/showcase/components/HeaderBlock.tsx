import ReactMarkdown from 'react-markdown';

interface THeaderBlock {
  title: string;
  short: string;
  markDown: string;
}

const HeaderBlock: React.FC<THeaderBlock> = (props) => {
  return (
    <>
      <section className="header">
        <div className="header-content">
          <h1 className="header__heading">
            {props.title}
          </h1>
          <p className="header__tagline">
            {props.short}
          </p>
        </div>
      </section>
      <ReactMarkdown className="description">
        {props.markDown}
      </ReactMarkdown>
    </>
  );
};

export default HeaderBlock;
