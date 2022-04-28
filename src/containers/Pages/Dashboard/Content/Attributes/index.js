import React, {useEffect, useState} from 'react'
import AttributesLayout from '../../../../../layouts/Content/Attributes'
import { uploader } from '../../../../../contexts/actions/services/upload'
import axiosInstance from '../../../../../helpers/axiosInstance'
import DataTable from '../../../../../components/DataTable'

function AttributesComponent() {
  const catInitial = {label:"", image:"", description:""}
  const [categoryForm, setCategoryForm] = useState(catInitial)
  const [categoryImage, setCategoryImage] = useState("")
  const [catButtonText, setCatButtonText] = useState("Add Category")
  const [subCatButtonText, setSubCatButtonText] = useState("Add Sub Category")
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [subcategories, setSubcategories] = useState([])
  
  

  const subInitial = {label:"", slug:"", category_id:"", description:""}
  const [subCategoryForm, setSubCategoryForm] = useState(subInitial)

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if (categories.length === 0) {
      axiosInstance().get("content/category/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
      .then(res => {
        if (!res.data.error) { 
          setCategories(res.data.response)
        }
      })
    }  
  }, [categories, user])

  useEffect(() => {
    if (subcategories.length === 0) {
      axiosInstance().get("content/subcategory/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
      .then(res => {
        if (!res.data.error) {
          setSubcategories(res.data.response)
        }
      })
    }
  }, [subcategories, user])

  const fetchCategories = () => {
    return axiosInstance().get("content/category/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
    .then(res => {
      if (!res.data.error) {
        setCategories(res.data.response)
      }
    })
  }

  const fetchSubCategories = () => {
    return axiosInstance().get("content/subcategory/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
    .then(res => {
      if (!res.data.error) {
        setSubcategories(res.data.response)
      }
    })
  }

  const categoryRow = () => {
    const _categories = []
    categories.forEach((item) => {
      const data = {
        label: item.label,
        slug: item.slug,
        image: item.image.slice(0,35),
        action: [<span className="text-success mr-3 ml-2" onClick={() => {editCategory(item._id)}}><i className="nav-icon i-Pen-2 font-weight-bold"></i></span>, <span className="text-danger mr-2"><i className="nav-icon i-Close-Window font-weight-bold"></i></span>]
      }
      _categories.push(data)
    })
    return _categories
  }

  const subCatRow = () => {
    const _subcategories = []
    subcategories.forEach((item) => {
      const data = {
        label: item.label,
        slug: item.slug,
        description: item.description.slice(0, 35),
        action: [<span className="text-success mr-3 ml-2" onClick={() => {editSubcategory(item._id)}}><i className="nav-icon i-Pen-2 font-weight-bold"></i></span>, <span className="text-danger mr-2"><i className="nav-icon i-Close-Window font-weight-bold"></i></span>]
      }
      _subcategories.push(data)
    })
    return _subcategories
  }

  const editCategory = (id) => {
    axiosInstance().get("content/category/by-identity?identity="+id)
    .then(resp => { 
      if (!resp.data.error){ 
        setCategoryForm({
          identity:resp.data.response._id,
          label:resp.data.response.label,
          image:resp.data.response.image,
          description:resp.data.response.description
        })
        setCatButtonText("Modify Category")
      }
    })
  }

  const editSubcategory = (id) => {
    axiosInstance().get("content/subcategory/by-identity?identity="+id)
    .then(resp => {
      if (!resp.data.error) {
        setSubCategoryForm({
          identity:resp.data.response._id,
          label:resp.data.response.label,
          slug:resp.data.response.slug,
          category_id:resp.data.response.category_id,
          description:resp.data.response.description
        })
        setSubCatButtonText("Modify Sub Category")
      }
    })
  }

  const catDataSet = {
    columns: [
      {
        label: "Label",
        field: "label",
        width: 150,
      },
      {
        label: "Slug",
        field: "slug",
        width: 150
      },
      {
        label: "Image",
        field: "image",
        width: 150
      },
      {
        label: "Action",
        field: "action",
        width: 150
      }
    ],

    rows: categoryRow()
  }

  const subCatDataSet  = {
    columns: [
      {
        label: "Label",
        field: "label",
        width: 150
      },
      {
        label: "Slug",
        field:"slug",
        width: 150
      },
      {
        label: "Description",
        field: "description",
        width: 270
      },
      {
        label: "Action",
        field: "action",
        width: 150
      }
    ],

    rows: subCatRow()
  }

  const handleCategoryChange = (e) => {
    const {name, value} = e.target
    setCategoryForm({...categoryForm, [name]: value})
  }

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0])  
  }

  const uploadCategoryImage = (e) => {
    e.preventDefault()
    uploader("image", categoryImage)
    .then(res => {
      if (res.data) {
        //save to media endpoint...
        setCategoryForm({...categoryForm, "image":res.data.url})
      }
    })
  }

  const handleCategorySubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (categoryForm.identity) {
      const resp = await axiosInstance().post("content/category/modify", categoryForm)
      if (resp && resp.data) { 
        setIsLoading(false)
        setCategoryForm(catInitial)
        fetchCategories()
        setCatButtonText("Add Category")
      }
    } else {
      const resp = await axiosInstance().post("content/category/create", categoryForm)
      if (resp && resp.data) {
        setIsLoading(false)
        setCategoryForm(catInitial)
        fetchCategories()
      }
    }  
  }

  const handleSubCategory = (e) => {
    const {name, value} = e.target
    setSubCategoryForm({...subCategoryForm, [name]: value})
  }

  const categorySelect = (e) => {
    const category = categories.find((cat) => cat._id === e.target.value)
    setSubCategoryForm({...subCategoryForm, "category_id":category._id, "category_label":category.label})
    // setSubCategoryForm({...subCategoryForm, "category":selected})
  }

  const submitSubCategory = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (subCategoryForm.identity) {
      const resp = await axiosInstance().post("content/subcategory/modify", subCategoryForm)
      if (resp && resp.data) {
        setIsLoading(false)
        setSubCategoryForm(subInitial)
        fetchSubCategories()
        setSubCatButtonText("Add Sub Category")
      }
    } else {
      //console.log(subCategoryForm)
      const resp = await axiosInstance().post("content/subcategory/create", subCategoryForm)
      if (resp && resp.data) {
        setIsLoading(false)
        setSubCategoryForm(subInitial)
        fetchSubCategories()
      }
    }
  }

  return (
    <AttributesLayout 
      handleCategoryChange={handleCategoryChange}
      handleCategorySubmit={handleCategorySubmit}
      handleCategoryImage={handleCategoryImage}
      uploadCategoryImage={uploadCategoryImage}
      catButtonText={catButtonText}
      loading={isLoading}
      CategoryDataTable={DataTable([5, 10, 20], 5, 4, catDataSet)}
      categoryForm={categoryForm}
      subCategoryForm={subCategoryForm}
      handleSubCategory={handleSubCategory}
      submitSubCategory={submitSubCategory}
      SubCategoryTable={DataTable([5, 10, 20], 5, 4, subCatDataSet)}
      subCatButtonText={subCatButtonText}
      categories={categories}
      categorySelect={categorySelect}
    />
  )
}

export default AttributesComponent