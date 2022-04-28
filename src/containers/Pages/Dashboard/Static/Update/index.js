import React, { useEffect, useState } from 'react';
import UpdateBlockLayout from '../../../../../layouts/Static/Update';
import axiosInstance from '../../../../../helpers/axiosInstance'
import { useParams, useNavigate } from 'react-router-dom'


function UpdateBlockComponent() {
    const {identity} = useParams()
    const [isActive, setIsActive] = useState(false)
    const [formValues, setFormValues] = useState({"identity": identity})
    const [content, setContent] = useState("")
    const [Block, setBlock] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (identity) {
            axiosInstance().get("page/by-identity?identity="+identity)
            .then(res => { 
                if (!res.data.error) {
                    setBlock(res.data.response)
                    setIsActive(res.data.response.status)
                    setContent(res.data.response.content)
                } // navigate to page not available if error
            })
        }
    },[identity])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleToggle = () => {
        setIsActive(!isActive)
        setFormValues({...formValues, "status":!isActive})
      }
    
    const handleContentChange = (value) => {
        setContent(value)
        setFormValues({...formValues, "content":value})
    }

    const handleSubmit =  async(e) => {
        e.preventDefault()
        setIsLoading(true)
        const resp = await axiosInstance().post("page/modify", formValues)
        setIsLoading(false)
        if (resp.data && !resp.data.error) {
            navigate("/dashboard/static/view")
        } else {
           setError(resp.data.message)
           console.log(error)
        }

    }


    return <UpdateBlockLayout 
        data={Block}
        handleChange={handleChange}
        isActive={isActive}
        handleToggle={handleToggle}
        handleSubmit={handleSubmit}
        loading={isLoading}
        content={content}
        handleContentChange={handleContentChange}
        error={error}
    />
}

export default UpdateBlockComponent; 
