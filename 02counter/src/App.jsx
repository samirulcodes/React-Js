import { useState } from 'react'  // -> use hook form this
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hook
  const [counter, setCounter] = useState(5)

  // let counter=5

  // add value button
  const addValue = () => {
    // counter=counter+1  
    // setCounter(counter+1)
    // setCounter(prevNumber => prevNumber + 1)
    setCounter(prevNumber=>{
      if(prevNumber<20){
        return prevNumber+1
      }
    })
  }

  // remove value button
  const removeValue = () => {
    // counter=counter-1  
    setCounter(prevNumber => {
      if (prevNumber > 0) {
        return prevNumber - 1
      }
      return prevNumber
    })
  }



  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter} </button> <br />

      <button onClick={removeValue}>Remove value {counter}</button>

      <p>footer:  {counter} </p>
    </>
  )
}

export default App

// Basically React control the UI updation

