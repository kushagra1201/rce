import React from "react";

function Navbar({ setIsSessionModalOpen }) {
  return (
    <div className="navbar">
      <div className="logo">&gt; RCE</div>
      <div className="execute-options">
        <select className="languages">
          <option value="cpp">C++</option>
          <option value="py">Python</option>
          <option value="js">Javascript</option>
        </select>
        <button className="execute-btn">Execute</button>
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
