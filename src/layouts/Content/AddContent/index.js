import React from 'react'
import ReactQuill from "react-quill" 
import EditorToolbar, { modules, formats } from "../../../components/Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
 
function AddContentLayout({
    type,
    types,
    media,
    image,
    content,
    handleChange,
    handleContent,
    handleType,
    handleMedia,
    handleImage,
    uploadImage,
    categories,
    subcategories,
    handleCategory,
    handleSubCategory,
    uploadMedia,
    featured,
    handleFeatured,
    status,
    handleStatus,
    fbPost,
    handleFbPost,
    validateForm,
    onSubmit
}) {

    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Content</h1>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li>Add New</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4"> 
                        <div className="card-body">
                            <div className="card-title mb-3">Add New Content</div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input className="form-control" type="text" name="title" onChange={handleChange} placeholder="Title" />
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label htmlFor="title">Category</label>
                                    <select className="form-control" onChange={handleCategory}>
                                        <option>Select Category</option>
                                        {categories.map((item, index) => (
                                            <option key={index} value={item._id}>{item.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label htmlFor="title">Sub Catgeory</label>
                                    <select className="form-control" onChange={handleSubCategory}>
                                        <option>Select Sub Category</option>
                                        {subcategories.map((item, index) => (
                                            <option key={index} value={item._id}>{item.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="content">Content</label>
                                    <div className="text-editor">
                                        <EditorToolbar />
                                        <ReactQuill 
                                            theme="snow"
                                            value={content}
                                            onChange={handleContent}
                                            placeholder={"Write something here..."}
                                            modules={modules}
                                            formats={formats}
                                            style={{height: '200px'}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label htmlFor="title">Content Type</label>
                                    <select className="form-control" onChange={handleType}>
                                        <option>Select Content Type</option>
                                        {types.map((item, index) => (
                                            <option key={index} value={item.value}>{item.label}</option>
                                        ))}
                                    </select>
                                </div> 
                                
                                <div className="col-md-6 form-group mb-3">
                                    <label htmlFor="title">Author</label>
                                    <input className="form-control" type="text" name="author" onChange={handleChange} placeholder="Author" />
                                </div>
                                { (type === 'Video' || type === 'Podcast') && <div className="col-md-6 input-group mb-3">
                                    <div className="custom-file">
                                        <input className="custom-file-input" type="file" name="mediaFile" onChange={handleMedia} />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                    </div>
                                    <div className="input-group-append"><span className="input-group-text" onClick={uploadMedia} >Upload</span></div>
                                </div>}
                                { (type === 'Video' || type === 'Podcast') && <div className="col-md-6 input-group mb-3">
                                    <input className="form-control" type="text" name="media" onChange={handleChange} defaultValue={media} placeholder="Enter URL path for image" />
                                </div>} 
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="title">Keywords</label>
                                    <input className="form-control" type="text" name="keywords" onChange={handleChange} placeholder="Keywords" />
                                </div>
                                <div className="col-md-12">
                                    <button disabled={validateForm} className="btn btn-primary" onClick={onSubmit}>Add Content</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-title mb-3">Cover Image</div>
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <input className="custom-file-input" type="file" name="image" onChange={handleImage}/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                </div>
                                <div className="input-group-append"><span className="input-group-text" onClick={uploadImage}>Upload</span></div>
                            </div>
                            <div className="input-group">
                                <input className="form-control" type="text" name="cover_img" onChange={handleChange} defaultValue={image} placeholder="Enter URL path for image" />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-title mb-2">Meta Data</div>
                            <div className="form-group mb-2">
                                <label htmlFor="metatitle">Meta Title</label>
                                <input className="form-control" type="text" name="meta_title" onChange={handleChange} placeholder="Meta Title" />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="metatitle">Meta Keyword</label>
                                <input className="form-control" type="text" name="meta_keywords" onChange={handleChange} placeholder="Meta Keyword" />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="metatitle">Meta Description</label>
                                <textarea className="form-control" name="meta_description" onChange={handleChange} row="3"></textarea>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="col-md-12 mb-3">
                                <span>Featured</span>
                                <label className="switch pl-5 switch-success ml-3">
                                <input type="checkbox" defaultChecked={featured} onChange={handleFeatured}/>
                                <span className="slider"></span>
                                </label>
                            </div>
                            <div className="col-md-12 mb-3">
                                <span>Publish</span>
                                <label className="switch pl-5 switch-success ml-3">
                                <input type="checkbox" defaultChecked={status} onChange={handleStatus}/>
                                <span className="slider"></span>
                                </label>
                            </div>
                            <div className="col-md-12 mb-3">
                                <span>Facebook</span>
                                <label className="switch pl-5 switch-success ml-3">
                                <input type="checkbox" defaultChecked={fbPost} onChange={handleFbPost} />
                                <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContentLayout
