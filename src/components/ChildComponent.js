import React from "react";
import "./ChildComponent.css";

function ChildComponent({ setDisplayMessage }) {
  return (
    <div className="button-container">
      <button id="toggle-message-button" onClick={setDisplayMessage}>
        Toggle Message
      </button>
    </div>
  );
}

export default ChildComponent;
