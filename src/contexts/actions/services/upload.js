import axios from 'axios'
//import { UPLOAD_ERROR, UPLOAD_LOADING, UPLOAD_SUCCESS } from '../../../constants/actionTypes'

export const uploader = (type, uploadData) =>{
    const formData = new FormData()
    formData.append("file", uploadData)
    formData.append("upload_preset", "assets")
    formData.append("cloud_name", "hubitdev")
    
    return axios.post("https://api.cloudinary.com/v1_1/hubitdev/"+type+"/upload", formData)
}