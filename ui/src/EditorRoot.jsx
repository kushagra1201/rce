import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

function EditorRoot({ mode, onChange, name, readOnly }) {
  return (
    <div className={`editor ${name}`}>
      <div className="tag">{name}</div>
      <AceEditor
        mode={mode}
        onChange={onChange}
        readOnly={readOnly}
        theme="dracula"
        width="100%"
        height="100%"
        showPrintMargin={false}
        fontFamily="JetBrains Mono"
        fontSize="16px"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default EditorRoot;
