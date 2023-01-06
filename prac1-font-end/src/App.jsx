import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { client } from "./clientUtils";

function App() {
  const [actorArray, setActors] = useState([]); 
  const [actorRole, setActorRoleSelect] = useState('');
  const [inputName, setInputName] = useState('');

  function addActor(){
    if(!inputName || !actorRole){
      alert("Error");
      return;
    }
    
  }
  useState(()=>{ 
   /* client
    .request("spawnActor", ["Jose","HelloWorldActor"])
    .then((result) => console.log(result));*/
    client
    .request("getNames", [])
    .then((result) => setActors(result));
  })

  return (
    <div className="App">
      <div className="parent">
        <div className="div1"><button className="colButton">Listar</button><button className="colButton">Monitorizar</button></div>
        <div className="div2"><button className="colButton">Listar</button><button className="colButton">Monitorizar</button></div>
        <div className="div3">
        <select readOnly={true} multiple={false} >
          {actorArray.map((actorName,index)=>(
            <option value={actorName} key={index}>{actorName}</option>
          ))}
        </select>
        </div>
        <div className="div4">
          <textarea readOnly={true} name="textarea" rows="10" cols="50" value="">
            Write something here
          </textarea>
        </div>
      </div>
      <div>
      <p>Add Actor:</p>
      <form>
      <input type="text" placeholder="Actor Name.." name="search" onInput={e => setInputName(e.target.value)}/>
      <div onChange={e=> setActorRoleSelect(e.target.value)}>
        <input type="radio" value="HelloWorldActor" name="rol"/> HelloWorldActor
        <input type="radio" value="InsultActor" name="rol"/> InsultActor
      </div>
      <button  onClick={() =>addActor()}>Agregar<i className="fa fa-search"></i></button>  
    </form>
    </div>
    </div>
    
  );
}

export default App;
