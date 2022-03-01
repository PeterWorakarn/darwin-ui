import { ReactElement } from 'react';
import { TBlockType, TSourceCode } from '../../../constant-enum-type/doc';
import CodeEditor from './CodeEditor';
import ComponentBlock from './ComponentBlock';

interface TShowCaseBlock {
  component: ReactElement
  doc: TSourceCode[]
  blockType: TBlockType;
}

const ShowCaseBlock:React.FC<TShowCaseBlock> = (props) => {
  return (
    <section className="showcase">
      <ComponentBlock type={props.blockType}>
        {props.component}
      </ComponentBlock>
      <CodeEditor doc={props.doc} />
    </section>
  );
};

export default ShowCaseBlock;
