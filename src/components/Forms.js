import React from "react";
import "./FormsStyles.css";

function Forms() {
  return (
    <div className="form">
      <form>
        <label>Enter name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
      </form>
      <button className="btn"> Submit </button>
    </div>
  );
}

export default Forms;
