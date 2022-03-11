import { useState, ReactElement } from 'react';
import { HiCode } from 'react-icons/hi';
import { TBlockType, TSourceCode } from '../../../constant-enum-type/doc';
import CodeEditor from './CodeEditor';
import ComponentBlock from './ComponentBlock';

interface TShowCaseBlock {
  component: ReactElement
  doc: TSourceCode[]
  blockType: TBlockType;
}

const ShowCaseBlock: React.FC<TShowCaseBlock> = (props) => {
  const [isShowCode, setIsShowCode] = useState(false);
  return (
    <section className="showcase relative max-w-[580px]">
      <button className="absolute top-0 right-0 z-40" type="button" onClick={() => setIsShowCode((prev) => !prev)}>
        <HiCode />
      </button>
      {isShowCode ? (
        <ComponentBlock type={props.blockType}>
          {props.component}
        </ComponentBlock>
      ) : <CodeEditor doc={props.doc} />}

    </section>
  );
};

export default ShowCaseBlock;
