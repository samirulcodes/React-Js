// this page is for how we protect our pages

import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    // useEffect() hame bataye ki user ko hame kaha bhejna hai like login or home page pe, or kya krna h
    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
         
            
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            console.log(authentication,authStatus);
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}


// How It Works:

// `authentication`: This is a flag (true/false) that says whether or not the user should be logged in.

// `authStatus`: This tells us if the user is actually logged in right now.

// `navigate`: This is like a GPS for your website. It moves the user to different pages.

// `setLoader(false)`: This turns off a loading spinner, showing the user that the page has finished loading.


// What the Code Does:

// If the user is supposed to be logged in (authentication is true), but they aren’t really logged in (authStatus doesn’t match authentication): The code sends them to the login page.

// If the user isn’t supposed to be logged in (authentication is false), and they still aren’t logged in (authStatus doesn’t match authentication): The code sends them to the home page.