import React from "react";
import EditorRoot from "./EditorRoot";

function CodeEditor({ code, setCode, language }) {
  function onChange(newValue) {
    setCode(newValue);
  }

  function setMode(language) {
    switch (language) {
      case "cpp":
        return "c_cpp";

      case "py":
        return "python";

      case "js":
        return "javascript";

      default:
        return "text";
    }
  }

  return (
    <EditorRoot
      mode={setMode(language)}
      name="code"
      onChange={onChange}
      readOnly={false}
      value={code}
    />
  );
}

export default CodeEditor;
