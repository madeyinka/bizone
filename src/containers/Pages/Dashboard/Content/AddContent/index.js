import React, {useEffect, useState} from 'react'
import {rand} from '../../../../../utils/rand'
import { useNavigate } from 'react-router-dom'
import AddContentLayout from '../../../../../layouts/Content/AddContent'
import axiosInstance from '../../../../../helpers/axiosInstance'
import { uploader } from '../../../../../contexts/actions/services/upload'

const slugify = require('slugify')

function AddContentComponent() {
   const [formValues, setFormValues] = useState({})
   const [categories, setCategories] = useState([])
   const [subcategories, setSubCategories] = useState([])
   const [content, setContent] = useState("Add content here...")
   const [type, setType] = useState("")
   const [media, setMedia] = useState("")
   const [mediaFile, setMediaFile] = useState("")
   const [image, setImage] = useState("")
   const [imageFile, setImageFile] = useState("")
   const [featured, setFeatured] = useState(false)
   const [status, setStatus] = useState(false)
   const [fbPost, setFbPost] = useState(false)

   const user = JSON.parse(localStorage.getItem('user'))
   const navigate = useNavigate()

    useEffect(() => {
        if (categories.length === 0){
            axiosInstance().get("content/category/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
            .then(res => {
                if (!res.data.error){
                    setCategories(res.data.response)
                }
            }) 
        }
    },[categories, user])

    const types = [
        {value:"Article", label:"Article"},
        {value:"Video", label:"Video"},
        {value:"Podcast", label:"Podcast"}
    ]

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleCategory = (e) => {
        const category = categories.find((cat) => cat._id === e.target.value)
        setFormValues({...formValues, "category_id":category._id, "category_label":category.label})
        axiosInstance().get("content/subcategory/pull?category_id="+category._id+"&sortby=createdAt&orderby=desc&client_id="+user.id)
        .then(res => {
            if (!res.data.error) {
                setSubCategories(res.data.response)
            }
        })
    }

    const handleSubCategory = (e) => {
        const subcategory = subcategories.find((subcat) => subcat._id === e.target.value)
        setFormValues({...formValues, "subcategory_id":subcategory._id, "subcategory_label":subcategory.label})
    }

    const handleContent = (value) => {
        setContent(value)
        setFormValues({...formValues, "content":value})
    }

    const handleType = (e) => {
        setType(e.target.value)
        setFormValues({...formValues, "type":e.target.value})
    }

    const handleMedia = (e) => {
        setMediaFile(e.target.files[0])
    }

    const uploadMedia = () => {
        uploader("image", mediaFile)
        .then(res => {
            setMedia(res.data.url)
            setFormValues({...formValues, "media":res.data.url})
        })
    }

    const handleImage = (e) => {
        setImageFile(e.target.files[0])
    }

    const uploadImage = () => {
        uploader("image", imageFile)
        .then(res => {
            setImage(res.data.url)
            setFormValues({...formValues, "cover_img":res.data.url})
        })
    }

    const handleFeatured = () => {
        setFeatured(!featured)
        setFormValues({...formValues, "featured":!featured})
    }

    const handleStatus = () => {
        setStatus(!status)
        setFormValues({...formValues, "status":!status})
    }

    const handleFbPost = () => {
        setFbPost(!fbPost)
        setFormValues({...formValues, "fb_status":!fbPost})
    }

    const validateForm = !formValues.title?.length || !formValues.category_id?.length || !formValues.type?.length || !formValues.author?.length 
   
   const onSubmit = async (e) => {
        e.preventDefault()
        //setIsLoading(true)
        const formData = {
            title:formValues.title,
            slug: slugify((formValues.title) + '-' + rand(15), {lower:true}),
            category_id:formValues.category_id,
            category_label:formValues.category_label,
            subcategory_id:formValues.subcategory_id,
            subcategory_label:formValues.subcategory_label,
            content:formValues.content,
            type:formValues.type,
            author:formValues.author,
            media:formValues.media,
            keywords:formValues.keywords,
            cover_img:formValues.cover_img,
            meta_title:formValues.meta_title,
            meta_keywords:formValues.meta_keywords,
            meta_description:formValues.meta_description,
            featured:formValues.featured,
            status:formValues.status,
            fb_status:formValues.fb_status
        }
        const resp = await axiosInstance().post("content/create", formData)
        if (resp && resp.data) {
            //setIsLoading(false)
            navigate("/dashboard/content/view")
        }
   }
   
    return (
        <AddContentLayout 
            type={type}
            types={types}
            media={media}
            image={image}
            content={content}
            handleType={handleType}
            handleChange={handleChange}
            handleContent={handleContent}
            handleMedia={handleMedia}
            handleImage={handleImage}
            uploadImage={uploadImage}
            handleCategory={handleCategory}
            handleSubCategory={handleSubCategory}
            categories={categories}
            subcategories={subcategories}
            uploadMedia={uploadMedia}
            featured={featured}
            status={status}
            fbPost={fbPost}
            handleFeatured={handleFeatured}
            handleStatus={handleStatus}
            handleFbPost={handleFbPost}
            validateForm={validateForm}
            onSubmit={onSubmit}
        />
    )
}

export default AddContentComponent
