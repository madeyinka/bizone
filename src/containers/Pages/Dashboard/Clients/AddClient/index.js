import React, {useState} from 'react'
import AddClientLayout from '../../../../../layouts/Clients/AddClients'
import axiosInstance from '../../../../../helpers/axiosInstance'
import { uploader } from '../../../../../contexts/actions/services/upload'
import { useNavigate } from 'react-router-dom'



function AddClientComponent() {
    const [formValues, setFormValues] = useState({})
    const [status, setStatus] = useState(false)
    const [publish, setPublish] = useState(false)
    const [imageURL, setImageURL] = useState("https://via.placeholder.com/240x240?text=BRAND LOGO")
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleStatusChange = () => {
        setStatus(!status)
        setFormValues({...formValues, "status":!status})
    }

    const handlePublishChange = () => {
        setPublish(!publish)
        setFormValues({...formValues, "publish":!publish})
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const uploadImage = (e) => {
        e.preventDefault()
        uploader("image", image)
        .then(res => {
            if (res.data) {
                 //save file data to media endpoint... 
                setImageURL(res.data.url)
                setFormValues({...formValues, "logo":res.data.url})
            }
        })
    }

    const validateForm = !formValues.firstname?.length || !formValues.lastname?.length || !formValues.email?.length
                         || !formValues.company?.length || !formValues.website?.length || !formValues.product?.length

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const resp = await axiosInstance().post("client/create", formValues)
        if (resp && resp.data) {
            setIsLoading(false)
            if (!resp.data.error) {
                navigate("/dashboard/client/all-clients")
            } else {
                setError(resp.data.message)
            }
        }
    }

    return (
        <AddClientLayout 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleImage={handleImage}
            uploadImage={uploadImage}
            imageURL={imageURL}
            status={status}
            publish={publish}
            loading={isLoading}
            error={error}
            validateForm={validateForm}
            handleStatusChange={handleStatusChange}
            handlePublishChange={handlePublishChange}
        />
    )
}

export default AddClientComponent
