import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';
import { TBlockType, TSourceCode } from '../../constant-enum-type/doc';
// import ShowCaseBlock from '../../feature/showcase/components/ShowCaseBlock';
// import HeaderBlock from '../../feature/showcase/components/HeaderBlock';
// import PageComponent from '../../feature/showcase/components/PageComponent';
// import DatePickerContainer from '../../../doc/datepicker/aDatePickerContainer';
import { TComponentName } from '../../constant-enum-type/component';

const DatePickerContainer = dynamic(import('../../../doc/datepicker/aDatePickerContainer'), { ssr: false });
const ShowCaseBlock = dynamic(import('../../feature/showcase/components/ShowCaseBlock'), { ssr: true });
const HeaderBlock = dynamic(import('../../feature/showcase/components/HeaderBlock'), { ssr: false });
const PageComponent = dynamic(import('../../feature/showcase/components/PageComponent'), { ssr: false });

const title = TComponentName.DATEPICKER;
const short = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra erat eget sapien';
const component_name = TComponentName.DATEPICKER;
const blockType: TBlockType = TBlockType.RECTANGLE;
const component = (
  <DatePickerContainer />
);
const markDown = `
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
    <PageComponent currentComponent={component_name}>
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
    </PageComponent>
  );
};

export default DatePickerPage;
