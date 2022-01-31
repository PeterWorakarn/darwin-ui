import { useEffect, useRef, useState } from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface TShowcase {
  doc: {
    file_content: string;
    file_name: string;
  }[]
}

const Showcase:React.FC<TShowcase> = (props) => {

  return (
    <>
    {props.doc.map(i => {
      return (
        <div key={i.file_name}>
          {i.file_name}
          <SyntaxHighlighter
          language="tsx"
          showLineNumbers
          style={materialDark}
          >
          {i.file_content}
          </SyntaxHighlighter>
        </div>
      )
    })}
    </>
  )
}

export default Showcase;