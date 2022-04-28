import React, {useState, useEffect} from 'react'
import UpdateContentLayout from '../../../../../layouts/Content/Update'
import axiosInstance from '../../../../../helpers/axiosInstance'
import { uploader } from '../../../../../contexts/actions/services/upload'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateContentComponent() {

    const {identity} = useParams()
    const [data, setData] = useState({})
    const [content, setContent] = useState("")
    const [formValues, setFormValues] = useState({"identity":identity})
    const [category, setCategory] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [categories, setCategories] = useState([])
    const [subcategories, setSubcategories] = useState([])
    const [type, setType] = useState("Article")
    const [media, setMedia] = useState("")
    const [mediaFile, setMediaFile] = useState("")
    const [image, setImage] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [featured, setFeatured] = useState(null)
    const [status, setStatus] = useState(null)
    const [fbPost, setFbPost] = useState(null)

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

   const types = [
    {value:"Article", label:"Article"},
    {value:"Video", label:"Video"},
    {value:"Podcast", label:"Podcast"}
    ]

    useEffect(() => {
        if (identity) {
            axiosInstance().get("content/by-identity?identity="+identity)
            .then(res => {
                if (!res.data.error) {
                    setData(res.data.response)
                    setType(res.data.response.type)
                    setFeatured(res.data.response.featured)
                    setStatus(res.data.response.status)
                    setFbPost(res.data.response.fb_status)
                    setCategory(res.data.response.category_id)
                    setSubcategory(res.data.response.subcategory_id)
                    setContent(res.data.response.content)
                    setMedia(res.data.response.media_link)
                    setImage(res.data.response.cover_img)
                }
            })
        }
        
        
    },[identity])

    useEffect(() => {
        if (categories.length === 0) {
          axiosInstance().get("content/category/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
          .then(res => {
              if (!res.data.error) {
                  setCategories(res.data.response)
              }
          })
      }
    },[categories, user])

    useEffect(() => {
      if (subcategories.length === 0){
        axiosInstance().get("content/subcategory/pull?category_id="+ data.category_id+"&sortby=createdAt&orderby=desc&client_id="+user.id)
        .then(res => {
            setSubcategories(res.data.response)
        })
      }
    }, [subcategories, user, data])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleCategory = (value) => {
        // e.preventDefault()
        setCategory(value)
        const category = categories.find((cat) => cat._id === value)
        setFormValues({...formValues, "category_id":category._id, "category_label":category.label})
        axiosInstance().get("content/subcategory/pull?category_id="+category._id+"&sortby=createdAt&orderby=desc&client_id="+user.id)
        .then(res => {
            setSubcategories(res.data.response)
        })
    }

    const handleSubcategory = (value) => {
        setSubcategory(value)
        const subCategory = subcategories.find((subcat) => subcat._id === value)
        setFormValues({...formValues, "subcategory_id":subCategory._id, "subcategory_label":subCategory.label})
    }

    const handleContent = (value) => {
        setContent(value)
        setFormValues({...formValues, "content":value})
    }

    const handleType = (value) => {
        setType(value)
        setFormValues({...formValues, "type":value})
    }

    const handleMedia = (e) => {
        setMediaFile(e.target.files[0])
    }

    const uploadMedia = (e) => {
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

    //const validateForm = !formValues.title?.length || !formValues.category_id?.length || !formValues.type?.length || !formValues.author?.length 

    const onSubmit = async (e) => {
        e.preventDefault()
        //setIsLoading(true)
        const resp = await axiosInstance().post("content/modify", formValues)
        //setIsLoading(false)
        if (resp.data && !resp.data.error) {
          navigate("/dashboard/content/view")
        }
    }

  return (
    <UpdateContentLayout 
        data={data}
        content={content}
        category={category}
        subcategory={subcategory}
        categories={categories}
        subcategories={subcategories}
        types={types}
        type={type}
        image={image}
        media={media}
        handleType={handleType}
        handleMedia={handleMedia}
        handleChange={handleChange}
        handleCategory={handleCategory} 
        handleContent={handleContent}
        handleSubcategory={handleSubcategory}
        uploadMedia={uploadMedia}
        handleImage={handleImage}
        uploadImage={uploadImage}
        featured={featured}
        status={status}
        fbPost={fbPost}
        handleFeatured={handleFeatured}
        handleStatus={handleStatus}
        handleFbPost={handleFbPost}
        onSubmit={onSubmit}
    />
  )
}

export default UpdateContentComponent