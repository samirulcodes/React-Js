
import Chai from "./chai"

function App() {
  const username="chai aur code"

  return (
    // jsx allow only one one element so we make a div element and wrap other tag in div tag
    <div>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
    </div>
  )
}

export default App
