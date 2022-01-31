import type { NextPage } from 'next'
import Showcase from '../../feature/common/components/Showcase'
import fs from 'fs'
import path from 'path'
import Btn from '../../../doc/buttons/Btn';

export const getStaticProps = async () => {
  // TODO: Use ENUM to like path.join
  const files = fs.readdirSync(path.join('doc','buttons'))
  const doc = files.map(filename => {
    // Read File From Server Side and Return to Array
    // How to know their are many file in it ?
    const file_content = fs.readFileSync(path.join('doc','buttons', filename), 'utf-8')
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

interface HomeProps {
  doc: {
    file_content: string;
    file_name: string;
  }[];
}


const Button: NextPage<HomeProps> = ({doc}) => {
  return (
    <>
      <Btn />
      <Showcase doc={doc} />
    </>
  )
}

export default Button
