import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="parent">
        <div className="div1">div1</div>
        <div className="div2">div2</div>
        <div className="div3">div3</div>
        <div className="div4">
          <textarea readOnly={true} name="textarea" rows="10" cols="50" value="">
            Write something here
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
