import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../../../contexts/Provider'
import UserProfileLayout from '../../../../layouts/UserProfile'
import { userProfile } from '../../../../contexts/actions/auth/user'

export default function UserProfileComponent() {

    const {userState:{user:{data}}, userDispatch} = useContext(GlobalContext)
    const user = JSON.parse(localStorage.getItem('user'))
    
     useEffect(() => {
         userProfile(user.id)(userDispatch)
     },[user.id, userDispatch])

    //  console.log(data)

    return (
        <UserProfileLayout profile={data} />
    )
}
