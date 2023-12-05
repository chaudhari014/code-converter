import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <AceEditor
      width="100%"
      height="100vh"
      mode="javascript"
      theme="monokai"
      value={code}
      onChange={onChange}
      placeholder="
      
      Enter you Code Here!!"
      fontSize="1.1rem"
      wrapEnabled={true}
    />
  );
};

export default CodeEditor;
