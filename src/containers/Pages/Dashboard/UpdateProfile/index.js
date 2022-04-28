import React, { useEffect, useContext , useState} from 'react'
import { GlobalContext } from '../../../../contexts/Provider'
import UpdateProfileLayout from '../../../../layouts/UpdateProfile'
import { userProfile, updateUser } from '../../../../contexts/actions/auth/user'
import { uploader } from '../../../../contexts/actions/services/upload'
import { useNavigate } from "react-router-dom";

function UpdateProfileComponent() {

   const {userState:{user:{data:{response}}}, userDispatch} = useContext(GlobalContext)
   const user = JSON.parse(localStorage.getItem('user'))
   const [formValues, setFormValues] = useState({"identity":response._id})
   const [image, setImage] = useState("")
   const [url, setUrl] = useState("")
   const navigate = useNavigate()

   useEffect(() => {
        userProfile(user.id)(userDispatch)
   },[user.id, userDispatch])

   const handleChange = (e) => {
       const {name, value} = e.target
       setFormValues({...formValues, [name]: value})
   }

   const handleSubmit = (e) => {
       e.preventDefault()
       updateUser(formValues)(userDispatch)
       navigate('/dashboard/profile')
   }

   const handleImage = (e) => {
       setImage(e.target.files[0])
   }
   
   const uploadImage = (e) => {
       e.preventDefault()
       uploader("image", image)
       .then(res => {
            if (res.data) {
                setUrl(res.data.url)
            } 
       })
       .catch(err => console.log(err))
   }

   const updateImage = () => {
        const profileImg = {
            "identity": response._id,
            "avatar": url
        }
        updateUser(profileImg)(userDispatch)
        setImage(url)
   }

    return (
        <UpdateProfileLayout 
        response={response} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleImage={handleImage}
        uploadImage={uploadImage}
        updateImage={updateImage}
        url={url}
        />
    )
}

export default UpdateProfileComponent
