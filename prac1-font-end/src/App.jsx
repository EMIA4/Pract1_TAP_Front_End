import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="parent">
        <div className="div1"><button className="colButton">Listar</button><button className="colButton">Monitorizar</button></div>
        <div className="div2"><button className="colButton">Listar</button><button className="colButton">Monitorizar</button></div>
        <div className="div3">
          <form action="action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">Agregar<i className="fa fa-search"></i></button>
          </form>
        </div>
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
