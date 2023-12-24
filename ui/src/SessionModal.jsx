import React from "react";
import { useState } from "react";

function SessionModal({ setIsSessionModalOpen, isSessionModalOpen }) {
  return (
    <div className={`backdrop ${isSessionModalOpen}`}>
      <div className="modal">
        <button
          className="close-btn"
          onClick={() => setIsSessionModalOpen("hidden")}
        >
          Close
        </button>
        <h3>Session Details</h3>
        <div className="session-form">
          <input
            type="text"
            className="session-input"
            placeholder="Session ID"
          />
          <button className="join-btn">Join</button>
        </div>
      </div>
    </div>
  );
}

export default SessionModal;
