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
        <button className="btn1"> Submit </button>
      </form>
    </div>
  );
}

export default Forms;
