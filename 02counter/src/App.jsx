import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(1)

 //let counter = 15;
const addvalue = ()=>{
 if (counter==20)
  alert("you reach maxiu=mum attempt")
 else
  setCounter(counter+1)
}
const removevalue =()=>{
  if (counter ==0){
    alert ("not print")
  }else
  setCounter (counter-1)
  
}
  return (
    <>
  <h1> Me aur React </h1>
  <h2> Counter Value : {counter} </h2>
    <button onClick={addvalue}
    > Add value </button>
    <br/> 
    <button onClick={removevalue}
    > Decrease value </button>
    </>
  )
}

export default App
