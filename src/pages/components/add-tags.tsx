import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';
import { TBlockType, TSourceCode } from '../../constant-enum-type/doc';
import { TComponentName } from '../../constant-enum-type/component';
import ShowCaseBlock from '../../feature/showcase/components/ShowCaseBlock';

const AddTags = dynamic(import('../../../doc/add-tags/aAddTagContainer'), { ssr: true });
const HeaderBlock = dynamic(import('../../feature/showcase/components/HeaderBlock'), { ssr: true });
const PageComponent = dynamic(import('../../feature/showcase/components/PageComponent'), { ssr: true });

const title = 'Add Tags';
const short = 'Categorize data by tags taxonomy';
const component_name = TComponentName.ADDTAGS;
const blockType: TBlockType = TBlockType.SQUARE;
const component = (
  <AddTags />
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

const AddTagsPage: NextPage<DocProps> = ({
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

export default AddTagsPage;
