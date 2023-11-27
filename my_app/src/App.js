import { useState } from "react";
import "./App.css";


export const App = () => {
    const [count,setCount]=useState(0);

    function Subtraction() {
      setCount(count-1);
    } 
    function Addition() {
      setCount(count+1);
    }
    function Reset(){
      setCount(0);
    }


  return (
    <>
      <div className="box" >
        <h1 className="heading">{count}</h1>
        <div className="btnMenu">
          <button className="sub" onClick={Subtraction} ><p className="value">SUB</p></button>
          <button className="reset" onClick={Reset} ><p className="value">RESET</p></button>
          <button className="add" onClick={Addition} ><p className="value">ADD</p></button>
        </div>
      </div>
    </>
  );
}
