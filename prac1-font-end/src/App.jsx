import { useState } from "react";
import Progressbar from './Progress_bar';
import "./App.css";
import { client } from "./clientUtils";
import{ Animated} from "react-native"
function App() {
  const [actorArray, setActors] = useState([]); 
  const [actorRole, setActorRoleSelect] = useState('');
  const [progresState, setProgresState] = useState('0');
  const [inputName, setInputName] = useState('');
  const [actualActor, setActualActor] = useState('');
  const [textArea, setTextArea] = useState('');
  function addActor(){
    if(!inputName || !actorRole){
      alert("Error");
      return;
    }
    client
    .request("spawnActor", [inputName,actorRole])
    .then((result) => alert(result));
  }
  function getNVueltas(){
    client
    .request("getVueltas", [])
    .then((result) => alert(result));
  }
  function startRingActor(){
    client
    .request("startRingApp", [])
    .then((result) => setInterval(getNVueltas(), 1000));
  }
  function actorEvents(){
    console.log("Actor "+actualActor);
    client
    .request("actorEvents", [actualActor])
    .then((result) => setTextArea(result));
  }
  function actorMessages(){
    console.log("Actor "+actualActor);
    client
    .request("actorMessages", [actualActor])
    .then((result) => setTextArea(result));
  }
  function monitorActor(){
    client
    .request("monitorActor", [actualActor])
    .then((result) => alert(result));
  }
  useState(()=>{ 
   /*client
   .request("monitorActor", ["a"])
   .then((result) => console.log(result));
   */
   client
    .request("getNames", [])
    .then((result) => setActors(result))  
    //console.log(actorArray)
    //setTextArea(actorArray[0])
  })

  return (
    <div className="App">
      <div className="parent">
        <div className="div1">
          <button className="colButton" onClick={() => monitorActor()}>Monitorizar</button>
          <button className="colButton" onClick={() => actorEvents()}>Events</button>
          <button className="colButton" onClick={() => actorMessages()}>Messages</button>
        </div>
        <div className="div2">
          <button className="colButton"  onClick={() => startRingActor()}>RingActor</button>
          <button className="colButton">Monitorizar</button></div>
        <div className="div3">
        <h3>Actor List:</h3>
        <select onChange={e => setActualActor(e.target.value)} readOnly={true} multiple={false} >
        <option value='default'></option>
          {actorArray.map((actorName,index)=>(
            <option value={actorName} key={index}>{actorName}</option>
          ))}
        </select>
        </div>
        <div className="div4">
          <textarea readOnly={true} name="textarea" rows="10" cols="50" value={textArea}>
            Write something here
          </textarea>
        </div>
      </div>
      <Progressbar bgcolor="#ff00ff" progress= {progresState}  height={30} />
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
