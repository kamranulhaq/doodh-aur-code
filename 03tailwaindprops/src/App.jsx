import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <>
    <h1 className='bg-green-400  text-red rounded-xl mb-6'> TAilwind test </h1>
    
       <Card  username="soon"/>
       <Card username="latest" /> 
    </>
  )
}

export default App
