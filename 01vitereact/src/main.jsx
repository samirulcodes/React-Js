import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// 1
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   }, 
//   children: 'Click me to visit google'
// }

const anotherUser="chai aur react"

// 2
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherElement
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // MyApp() //--> we can call function like this also
  // <App/>

  //  1
  // anotherElement // convert into object

  // 2
  reactElement
)
