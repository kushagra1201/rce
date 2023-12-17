import React from "react";

function Navbar({ setIsSessionModalOpen }) {
  return (
    <div className="navbar">
      <div className="home-icon">Remote Code Executor</div>
      <div className="execute-options">
        <select>
          <option value="cpp">C++</option>
          <option value="py">Python</option>
          <option value="java">Java</option>
          <option value="js">Javascript</option>
        </select>
        <button>Execute</button>
      </div>
      <div className="navbar-links">
        <button onClick={() => setIsSessionModalOpen("visible")}>
          Session
        </button>
        <button>Github</button>
        <button>Docs</button>
      </div>
    </div>
  );
}

export default Navbar;
