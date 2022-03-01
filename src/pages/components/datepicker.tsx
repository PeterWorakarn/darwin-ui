import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import { TBlockType, TSourceCode } from '../../constant-enum-type/doc';
import ShowCaseBlock from '../../feature/showcase/components/ShowCaseBlock';
import HeaderBlock from '../../feature/showcase/components/HeaderBlock';
import DatePickerContainer from '../../../doc/datepicker/aDatePickerContainer';

const title = 'datepicker';
const short = 'datepicker';
const component_name = 'datepicker';
const blockType:TBlockType = TBlockType.RECTANGLE;
const component = (
  <DatePickerContainer />
);
const markDown = `
  # Hello world
`;

export const getStaticProps = async () => {
  const files = fs.readdirSync(
    path.join('doc', component_name),
  );
  const doc = files.map((filename) => {
    // Read File From Server Side and Return to Array
    // How to know their are many file in it ?
    const file_content = fs.readFileSync(
      path.join('doc', component_name, filename),
      'utf-8',
    );
    return {
      file_content,
      file_name: filename,
    };
  });

  return {
    props: {
      doc,
    },
  };
};

interface DocProps {
  doc: TSourceCode[];
}

const DatePickerPage: NextPage<DocProps> = ({
  doc,
}) => {
  return (
    <>
      <HeaderBlock
        title={title}
        short={short}
        markDown={markDown}
      />
      <ShowCaseBlock
        blockType={blockType}
        component={component}
        doc={doc}
      />
    </>
  );
};

export default DatePickerPage;
