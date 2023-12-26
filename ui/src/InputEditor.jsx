import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import EditorRoot from "./EditorRoot";

function InputEditor({ input, setInput }) {
  function onChange(newValue) {
    setInput(newValue);
  }
  return (
    <EditorRoot
      mode="text"
      name="input"
      onChange={onChange}
      readOnly={false}
      value={input}
    />
  );
}

export default InputEditor;
