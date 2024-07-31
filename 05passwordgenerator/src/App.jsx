import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLenght] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNIOPQRSTUVWXYZabcdefghijklimniopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_=+\|[]{};:/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  // useCallback-> memorise the function (jitna ho sake)
  // for copy to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    // this swill show highlighted copy text
    passwordRef.current?.select() // -> ?- optionally
    // this will select only given range value
    passwordRef.current?.setSelectionRange(0, 30)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // whenevr page reload it will change password
  // if there is any change it will run again
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />

          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={30} value={length} className='cursor-pointer' onChange={(e) => { setLenght(e.target.value) }} />
            <label>Length:{length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={() => {
              setNumAllowed((prev) => !prev)
            }} />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='numberInput' onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label>Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
