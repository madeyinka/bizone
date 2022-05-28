import React, { useEffect , useState} from 'react'
import UpdateProfileLayout from '../../../../layouts/UpdateProfile'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { uploader } from '../../../../contexts/actions/services/upload'
import { useNavigate, useLocation } from "react-router-dom";
import { states } from '../../../../constants/data/states'

function UpdateProfileComponent() {

   const navigate = useNavigate()
   const location = useLocation()
   const axiosPrivate = useAxiosPrivate()
   const [data, setData] = useState()
   const [state, setState] = useState('')
   const [lga, setLga] = useState('')


   //form fields
   const [formValues, setFormValues] = useState({})
   const [lgas, setLgas] = useState()
   const [url, setUrl] = useState('')
   const [file, setFile] = useState('')


   useEffect(() => {
       let isMounted = true
       const controller = new AbortController()

       const getUser = async () => {
           try {
            const response = await axiosPrivate.get('/client/by-identity', {
                    signal: controller.signal
                })
                isMounted && setData(response.data.response)
                setState(response.data.response.state_alias)
                setLga(response.data.response.lga)
           } catch(err) {
               navigate('/auth/login', { state: { from: location }, replace: true })
           }
       }

       getUser()

       return () => {
           isMounted = false
           controller.abort()
       }
   },[navigate, location, axiosPrivate])

   //set input field values
   const handleChange = (e) => {
       const {name, value} = e.target
       setFormValues({...formValues, [name]: value})
   }

   const handleState = (value) => {
       setState(value)
       const state = states.find((lga) => lga.alias === value)
       setFormValues({...formValues, "state_alias": state.alias, "state":state.state}) 
       setLgas(state.lgas)
   }

   const handleLGA = (value) => {
       setLga(value)
       setFormValues({...formValues, "lga":value})
   }

   const handleImage = (e) => {
       setFile(e.target.files[0])
   }

   const uploadImage = async (e) => {
       e.preventDefault()
       try {
            const resp = await uploader("image", file)
            if (resp && resp.data) setUrl(resp.data.url)
            setFormValues({...formValues, "avatar":resp.data.url})
       } catch (err) {
           console.error(err)
       }
   }

   const handleSubmit = async (e) => {
       e.preventDefault()
       try {
            const response = await axiosPrivate.post('client/modify',
            JSON.stringify(formValues), 
            {
                headers:{'Content-Type': 'application/json'},
                withCredentials: true
            })
            setFormValues(null)
            navigate('/dashboard/profile')
       } catch (err) {
           
       }
   }

    return (
        <UpdateProfileLayout 
        response={data} 
        states={states}
        lgas={lgas}
        url={url}
        state={state}
        lga={lga}
        handleChange={handleChange}
        handleState={handleState}
        handleLGA={handleLGA}
        handleImage={handleImage}
        uploadImage={uploadImage}
        handleSubmit={handleSubmit}
        />
    )
}

export default UpdateProfileComponent
