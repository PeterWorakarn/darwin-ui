import type { GetServerSideProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { TSourceCode } from '../../../constant-enum-type/doc';
import HeaderBlock from '../../../feature/showcase/components/HeaderBlock';
import ShowCaseBlock from '../../../feature/showcase/components/ShowCaseBlock';
import NotFound from '../../404';
import ROUTES, { TRoute } from '../../../constant-enum-type/route';
import titleCase from '../../../feature/seo/utils/title-case';

export const getServerSideProps: GetServerSideProps = async (context) => {
  let doc: TSourceCode[] = [];
  const component_infos = ROUTES.filter((component) => {
    if (component.type === 'component' && component.title === context.query.component_name as string) {
      return component;
    }
    return null;
  });
  if (component_infos.length !== 0) {
    const files = fs.readdirSync(
      path.join('doc', context.query.component_name as string),
    );
    doc = files.map((filename) => {
      // Read File From Server Side and Return to Array
      // How to know their are many file in it ?
      const file_content = fs.readFileSync(
        path.join('doc', context.query.component_name as string, filename),
        'utf-8',
      );
      return {
        file_content,
        file_name: filename,
      };
    });
  }

  const component_info = JSON.parse(JSON.stringify(component_infos));

  return {
    props: {
      doc,
      component_info,
    },
  };
};

interface DocProps {
  doc: TSourceCode[];
  component_info: TRoute[];
}

const getCompoent = (title: string) => {
  const component_react = ROUTES.filter((i) => {
    if (i.type === 'component' && i.title === title) {
      return i;
    }
    return null;
  });
  return component_react[0].type === 'component' ? component_react[0].component : <></>;
};

const ComponentPage: NextPage<DocProps> = ({
  doc, component_info,
}) => {
  const router = useRouter();
  const overideSEO = {
    titleTemplate: '%s | Drawin UI',
    title: titleCase(router.query.component_name as NextParsedUrlQuery as string),
    canonical: router.route,
  };
  return (
    <>
      <NextSeo {...overideSEO} />
      {doc.length === 0 || component_info[0].type !== 'component' ? <NotFound /> : (
        <>
          <HeaderBlock
            title={component_info[0].title}
            short={component_info[0].short}
            markDown="Markdown"
          />
          <ShowCaseBlock
            blockType={component_info[0].block_type}
            component={getCompoent(component_info[0].title)}
            doc={doc}
          />
        </>
      )}

    </>
  );
};

export default ComponentPage;
