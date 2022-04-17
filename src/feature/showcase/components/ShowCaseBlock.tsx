import dynamic from 'next/dynamic';
import { useState, ReactElement } from 'react';
import { HiCode, HiOutlineTemplate } from 'react-icons/hi';
import { TBlockType, TSourceCode } from '../../../constant-enum-type/doc';
import ComponentBlock from './ComponentBlock';

const CodeEditor = dynamic(import('./CodeEditor'), { ssr: false });

interface TShowCaseBlock {
  component: ReactElement
  doc: TSourceCode[]
  blockType: TBlockType;
}

const ShowCaseBlock: React.FC<TShowCaseBlock> = (props) => {
  const [isShowCode, setIsShowCode] = useState(false);
  return (
    <div className="showcase relative w-[322px] xs:w-[343px] sm:w-[580px]">
      <button className="absolute top-1.5 xl:top-3 right-1.5 xl:right-3 z-40" type="button" onClick={() => setIsShowCode((prev) => !prev)}>
        {isShowCode ? <HiOutlineTemplate className="w-5 h-5 text-white" /> : <HiCode className="w-5 h-5" />}
      </button>
      {isShowCode ? (
        <CodeEditor doc={props.doc} />
      ) : (
        <ComponentBlock type={props.blockType}>
          {props.component}
        </ComponentBlock>
      )}

    </div>
  );
};

export default ShowCaseBlock;
