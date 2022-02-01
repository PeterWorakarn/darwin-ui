import type { NextPage } from 'next'
import BlockShowcase from '../../feature/showcase/components/BlockShowcase'
import fs from 'fs'
import path from 'path'

const component_name = 'button';

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('doc',component_name))
    const doc = files.map(filename => {
      // Read File From Server Side and Return to Array
      // How to know their are many file in it ?
      const file_content = fs.readFileSync(path.join('doc',component_name, filename), 'utf-8')
        return {
          file_content: file_content,
          file_name: filename
        }
    })
  
  return {
    props: {
      doc
    }
  }
}

interface DocProps {
  doc: {
    file_content: string;
    file_name: string;
  }[];
}


const PageShowcase: NextPage<DocProps> = ({doc}) => {
  return (
    <>
      {doc ? <BlockShowcase doc={doc} /> : null }
    </>
  )
}

export default PageShowcase
