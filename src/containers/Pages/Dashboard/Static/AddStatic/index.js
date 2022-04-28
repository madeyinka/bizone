import React, {useState} from 'react'
import AddStaticLayout from '../../../../../layouts/Static/AddStatic'
import axiosInstance from '../../../../../helpers/axiosInstance'
import { useNavigate } from 'react-router-dom'

function AddStaticComponent() {
  const [formValues, setFormValues] = useState({})
  const [isActive, setIsActive] = useState(false)
  const [content, setContent] = useState("Add content here...")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }
  
  const handleToggle = () => {
    setIsActive(!isActive)
    setFormValues({...formValues, status:!isActive})
  }

  const handleContentChange = (value) => {
    setContent(value)
    setFormValues({...formValues, "content":value})
}

  const validateForm = !formValues.title?.length || !formValues.content?.length

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (formValues && !validateForm) {
      const resp = await axiosInstance().post("page/create", formValues)
      if (resp && resp.data) {
        setIsLoading(false)
        if (!resp.data.error) {
          navigate('/dashboard/static/view')
        } else {
          setError(resp.data.message)
        }
      }
    } 
  }

    return (
          <AddStaticLayout 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isActive={isActive}
            handleToggle={handleToggle}
            handleContentChange={handleContentChange}
            content={content}
            validateForm={validateForm}
            loading={isLoading}
            error={error}
          />
    )
}

export default AddStaticComponent
 