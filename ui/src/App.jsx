import React, { useState } from "react";
import AceEditor from "react-ace";
import "./App.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import CodeEditor from "./CodeEditor";
import InputEditor from "./InputEditor";
import OutputEditor from "./OutputEditor";
import Navbar from "./Navbar";
import SessionModal from "./SessionModal";

function App() {
  const [isSessionModalOpen, setIsSessionModalOpen] = useState("hidden");

  return (
    <>
      <SessionModal
        setIsSessionModalOpen={setIsSessionModalOpen}
        isSessionModalOpen={isSessionModalOpen}
      />
      <div className="editor-grid">
        <Navbar setIsSessionModalOpen={setIsSessionModalOpen} />
        <CodeEditor />
        <InputEditor />
        <OutputEditor />
      </div>
    </>
  );
}

export default App;
