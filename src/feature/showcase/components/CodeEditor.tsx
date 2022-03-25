import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { TSourceCode } from '../../../constant-enum-type/doc';
import fileNameFormat from '../utils/format-file-name';

interface TCodeEditor {
  doc: TSourceCode[]
}

const CodeEditor: React.FC<TCodeEditor> = (props) => {
  const [currentTab, setCurrentTab] = useState(props.doc[0].file_name);
  return (
    <section className="code-editor">
      <div className="code-editor__statusbar">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5" /></g></svg>
      </div>
      {/* File name Zone */}
      <div className="code-editor__filename">
        {props.doc.map((file_code) => {
          return (
            <div className={`${currentTab === file_code.file_name ? 'font-semibold border-b-2 border-b-primary-blue' : 'font-normal'} cursor-pointer select-none flex justify-start items-center gap-1 h-7 pl-2 pr-5`} key={file_code.file_content} onClick={() => setCurrentTab(file_code.file_name)}>
              <img className="mb-[2px] w-[14px] h-[14px] rounded-sm" src="/img/typescript-logo.svg" alt="typescript-logo" />
              <span className="text-xs text-[#86a5ff]">{fileNameFormat(file_code.file_name)}</span>
            </div>
          );
        })}
      </div>
      {/* Editor Zone */}
      <div className="code-editor-container">
        {props.doc.map(code => {
          return (
            <div key={code.file_name}>
              <span className="sr-only">
                {code.file_name}
              </span>
              <div className={`${currentTab === code.file_name ? 'z-30' : 'z-0'} code-editor-container__sourcecode`}>
                <SyntaxHighlighter
                  language="tsx"
                  wrapLines
                  wrapLongLines
                  useInlineStyles
                  lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre' } }}
                  // showLineNumbers
                  style={materialDark}
                  codeTagProps={{ style: { fontSize: '0.75rem', lineHeight: '1' } }}
                >
                  {code.file_content}
                </SyntaxHighlighter>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CodeEditor;
