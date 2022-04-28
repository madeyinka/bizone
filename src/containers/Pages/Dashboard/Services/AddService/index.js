import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../../../helpers/axiosInstance'
import AddServiceLayout from '../../../../../layouts/Services/AddService'
import { uploader } from '../../../../../contexts/actions/services/upload'

function AddServiceComponent() {
    const [formValues, setFormValues] = useState({})
    const [groups, setGroups] = useState([])
    const [content, setContent] = useState("Add service details...")
    const [imageFile, setImageFile] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    useEffect(() => {
        if (groups.length === 0) {
            axiosInstance().get('service/group/pull?sortby=createdAt&orderby=desc&client_id='+user.id)
            .then(res => {
                if (!res.data.error) {
                    setGroups(res.data.response)
                }
            })
        }
    },[groups, user])


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleCategory = (e) => {
        const selected = groups.find((item) => item._id === e.target.value)
        setFormValues({...formValues, "group_id":selected._id, "group_name":selected.name})
    }

    const handleContent = (value) => {
        setContent(value)
        setFormValues({...formValues, "description":value})
    }

    const handleImage = (e) => {
        setImageFile(e.target.files[0])
    }

    const uploadImage = () => {
        uploader("image", imageFile)
        .then(res => {
            setImage(res.data.url)
            setFormValues({...formValues, "image":res.data.url})
        })
    }

    const handleStatus = () => {
        setStatus(!status)
        setFormValues({...formValues, "status":!status})
    }

    const onSubmit = async (e) => {
        // console.log(formValues)
        e.preventDefault()
        const resp = await axiosInstance().post('service/create', formValues)
        if (resp && resp.data) {
            navigate('/dashboard/service/view')
        }
    }


    return (
        <AddServiceLayout
            handleChange={handleChange}
            groups={groups}
            handleCategory={handleCategory}
            handleContent={handleContent}
            handleImage={handleImage}
            uploadImage={uploadImage}
            handleStatus={handleStatus}
            image={image}
            status={status}
            content={content}
            onSubmit={onSubmit}
        />
    )
}

export default AddServiceComponent
