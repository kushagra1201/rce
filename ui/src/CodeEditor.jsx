import React from "react";
import EditorRoot from "./EditorRoot";

function onChange(newValue) {
  console.log("change", newValue);
}

function CodeEditor() {
  return (
    <EditorRoot mode="c_cpp" name="code" onChange={onChange} readOnly={false} />
  );
}

export default CodeEditor;
