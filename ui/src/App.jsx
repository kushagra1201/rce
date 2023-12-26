import React, { useState } from "react";
import AceEditor from "react-ace";
import "./App.css";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import axios from "axios";
import CodeEditor from "./CodeEditor";
import InputEditor from "./InputEditor";
import OutputEditor from "./OutputEditor";
import Navbar from "./Navbar";
import SessionModal from "./SessionModal";

function App() {
  function execute(data) {
    axios
      .post("http://localhost:8000/code", data)
      .then((res) => {
        setOutput(res.data.stdout + "\n\n" + res.data.stderr);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [isSessionModalOpen, setIsSessionModalOpen] = useState("hidden");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [sessionId, setSessionId] = useState("1234");
  const [output, setOutput] = useState("");

  return (
    <main className="content">
      <SessionModal
        setIsSessionModalOpen={setIsSessionModalOpen}
        isSessionModalOpen={isSessionModalOpen}
      />
      <div className="editor-grid">
        <Navbar
          setIsSessionModalOpen={setIsSessionModalOpen}
          setLanguage={setLanguage}
          language={language}
          execute={() => {
            execute({ code, input, language, sessionId });
          }}
        />
        <CodeEditor code={code} setCode={setCode} language={language} />
        <InputEditor input={input} setInput={setInput} />
        <OutputEditor output={output} />
      </div>
    </main>
  );
}

export default App;
