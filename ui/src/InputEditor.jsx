import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

function InputEditor() {
  return (
    <div className="input editor">
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        width="100%"
        height="100%"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default InputEditor;
