import React, { useEffect, useState } from 'react'
import UpdateClientLayout from '../../../../../layouts/Clients/UpdateClient'
import { uploader } from '../../../../../contexts/actions/services/upload'
import axiosInstance from '../../../../../helpers/axiosInstance'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateClientComponent() {
    const {identity} = useParams()
    const navigate = useNavigate()
    const [Client, setClient] = useState({})
    const [imageURL, setImageURL] = useState("")
    const [image, setImage] = useState("")
    const [status, setStatus] = useState(false)
    const [publish, setPublish] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState({"identity": identity})

    useEffect(() => {
        if (identity) {
            axiosInstance().get("client/by-identity?identity="+identity)
            .then(res => { 
                if (!res.data.error) {
                    setClient(res.data.response)
                    setImageURL(res.data.response.logo)
                    setStatus(res.data.response.status)
                    setPublish(res.data.response.publish)
                } // navigate to page not available if error
            })
        }
    }, [identity])

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const resp = await axiosInstance().post("client/modify", formValues)
        console.log(resp)
        setIsLoading(false)
        if (resp.data && !resp.data.error) {
            navigate("/dashboard/client/all-clients")
        } else {
           setError(resp.data.message)
           console.log(error)
        }
    }

  return (
    <UpdateClientLayout 
        data={Client}
        imageURL={imageURL}
        status={status}
        publish={publish}
        loading={isLoading}
        handleImage={handleImage}
        handleStatusChange={handleStatusChange}
        handlePublishChange={handlePublishChange}
        uploadImage={uploadImage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
    />
  )
}

export default UpdateClientComponent