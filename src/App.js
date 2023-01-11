import React from "react";
import "./style.css";

export default function App() {
  const refData = React.useRef(null);

  const testRef = () => {
   refData.current.value = "Ref is successfully working";
   refData.current.focus();
  }
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" placeholder="useref demo" ref={refData} />&nbsp;
      <button onClick={testRef}>Test </button>
    </div>
  );
}
