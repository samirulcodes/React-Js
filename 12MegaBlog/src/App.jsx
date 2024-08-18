import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  // loading state
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // take useEffect and ask them that you loggedIn or not 
  useEffect(() => {
    authService.getCurrentUser()
      // .then()--> if successfully found then ok
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      // if there is any error it go to catch statement
      // .catch((e) => e.window.alert("There is some error"))

      // finally()--> finally will execute there is no exception, call setLoading that loading work is over so make it false
      .finally(() => setLoading(false))
  }, [])

  //  conditional rendering (return with our choice)
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-fill block'>
        {/* components */}
        <Header/>
        <main>
       TODO:  <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App



// taking access of env 
// console.log(import.meta.env.VITE_APPWRITE_URL);