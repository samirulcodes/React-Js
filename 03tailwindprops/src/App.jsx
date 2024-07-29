import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"aman",
    age:20
  }

  let myArr=[1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    {/* <Card channel="react" obj={myObj} Arr={myArr} /> */}

    <Card username="react" btn="Click me />
    <Card username="aman" btn="Visit me" />
    </>
  )
}

export default App
