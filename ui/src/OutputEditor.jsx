import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import EditorRoot from "./EditorRoot";

function OutputEditor({ output }) {
  return (
    <EditorRoot
      mode="text"
      name="output"
      onChange={() => {}}
      readOnly={true}
      value={output}
    />
  );
}

export default OutputEditor;
