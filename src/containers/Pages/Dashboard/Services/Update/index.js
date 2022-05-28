import React, { useEffect, useState } from 'react'
import UpdateServiceLayout from '../../../../../layouts/Services/Update'
import axiosInstance from '../../../../../helpers/axiosInstance'
import { uploader } from '../../../../../contexts/actions/services/upload'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateServiceComponent() {

    const {identity} = useParams()
    const [formValues, setFormValues] = useState({'identity':identity})
    const [data, setData] = useState({})
    const [groups, setGroups] = useState([])
    const [group, setGroup] = useState('')
    const [image, setImage] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [content, setContent] = useState('')
    const [status, setStatus] = useState(null)

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    useEffect(() => {
        if (identity) {
            axiosInstance().get("service/by-identity?identity="+identity)
            .then(res => {
                if (!res.data.error) {
                    setData(res.data.response)
                    setImage(res.data.response.image)
                    setContent(res.data.response.description)
                    setStatus(res.data.response.status)
                    setGroup(res.data.response.group_id)
                }
            })
        }
    }, [identity])

    useEffect(() => {
        if (groups.length === 0) {
            axiosInstance().get('service/group/pull?sortby=createdAt&orderby=desc&client_id='+user.id)
            .then(res => {
                if (!res.data.error) {
                    setGroups(res.data.response)
                }
            })
        }
    }, [groups, user])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleCategory = (value) => {
        setGroup(value)
        const selected = groups.find((item) => item._id === value)
        setFormValues({...formValues, "group_id":selected._id, "group_name":selected.name})
    }

    const handleContent = (value) => {
        setContent(value)
        setFormValues({...formValues, "description":JSON.stringify(value)})
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
        console.log(formValues)
        e.preventDefault()
        const resp = await axiosInstance().post('service/modify', formValues)
        if (resp && !resp.data.error) {
            navigate('/dashboard/service/view')
        }
    }

  return (
    <UpdateServiceLayout 
        data={data}
        image={image}
        groups={groups}
        group={group}
        content={content}
        status={status}
        handleChange={handleChange}
        handleContent={handleContent}
        handleCategory={handleCategory}
        handleImage={handleImage}
        uploadImage={uploadImage}
        handleStatus={handleStatus}
        onSubmit={onSubmit}
    />
  )
}

export default UpdateServiceComponent