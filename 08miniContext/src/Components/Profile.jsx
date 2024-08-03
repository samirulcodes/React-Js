import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    // // taking setUser from UserContextProvider file as a data
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    // else
    return <div>Welcome {user.username}</div>
}

export default Profile