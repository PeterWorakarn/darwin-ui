import ReactMarkdown from 'react-markdown';

interface THeaderBlock {
  title: string;
  short: string;
  markDown: string;
  component: JSX.Element;
}

const HeaderBlock:React.FC<THeaderBlock> = (props) => {
  // TODO: https://bulma.io/documentation/components/breadcrumb/
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
        <div className="header-cover">
          {props.component}
        </div>

      </section>
      <ReactMarkdown className="header__description prose prose-sm prose-slate prose-p:">
        {props.markDown}
      </ReactMarkdown>
    </>
  );
};

export default HeaderBlock;
