import { useState } from "react";
import "./App.css";

function App() {

// let counter = 15;

//useState -> is a hook which returns the value in the form of an array.

// we are extracting the value in the array in which first one(counter) is the variable and the second one(setCounter) is the method

  const[counter, setCounter] =  useState(0) //inside the useState parentheses we provide the initial value.
  
  const addValue = () =>{
    setCounter((prevCounter)=> prevCounter+1) //callback function
  }

  const removeValue = ()=>{
    setCounter((prevCounter)=>prevCounter-1)
  }



  return (
    <>
      <h1>react course with Aarnav</h1>
      <h2>counter value: {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "} 
      <button onClick={removeValue}> Remove Value</button>
      <p>footer:{counter} </p>
    </>
  );
}

export default App;
