import React, {useState, useEffect} from 'react'
import UserProfileLayout from '../../../../layouts/UserProfile'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate'
import { useNavigate, useLocation } from 'react-router-dom'

export default function UserProfileComponent() {

    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState()
    
     useEffect(() => {
         let isMounted = true
         const controller = new AbortController()

         const getUser = async () => {
             try {
                const response = await axiosPrivate.get('/client/by-identity', {
                    signal: controller.signal
                })
                isMounted && setData(response.data.response)
             } catch (err) {
                console.error(err)
                navigate('/auth/login', { state: { from: location }, replace: true })
             }
         }
         getUser()

        return () => {
            isMounted = false
            controller.abort()
        }
     },[axiosPrivate, navigate, location])

    //  console.log(data)

    return (
        <UserProfileLayout response={data} />
    )
}
