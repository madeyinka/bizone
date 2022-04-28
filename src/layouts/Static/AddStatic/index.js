/* eslint-disable no-multi-str */
import React from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

function AddStaticLayout({handleChange, isActive, handleToggle, handleSubmit, validateForm, error, loading, handleContentChange, content}) {
    //console.log(loading)
    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Page</h1>
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li>Add New</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-title mb-3">Add New Block</div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input className="form-control" type="text" name="title" onChange={handleChange} placeholder="Title" />
                                </div>
                                <div className="col-md-12 form-group mb-4">
                                    <label htmlFor="slug">Slug</label>
                                    <input className="form-control" type="text" name="slug" onChange={handleChange} placeholder="Slug (optional)" />
                                </div>
            
                                {/* <div className="col-md-12 form-group">
                                    <label htmlFor="content">Content</label>
                                    <textarea className="form-control" aria-label="With textarea" name="content" onChange={handleChange} ></textarea>
                                </div> */} 

                                <div className="col-md-12" style={{marginBottom: '50px'}}>
                                    <label htmlFor="content">Content</label>
                                    <ReactQuill
                                        theme="snow"
                                        value={content}
                                        onChange={handleContentChange}
                                        style={{height: '300px'}}
                                    />
                                </div>
                                
                                <div className="row col-md-12">
                                    <div className="col-md-4 mt-2">
                                        {loading && <button  disabled className="btn btn-primary">Loading...</button>}
                                        {!loading && <button disabled={validateForm} className="btn btn-primary" onClick={handleSubmit}>Add Block</button>}
                                    </div>
                                    
                                    {error  && <div className="col-md-6 alert alert-danger ml-auto" role="alert"><strong className="text-capitalize">Error Encountered!</strong> 
                                        <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="metatitle">Meta Title</label>
                                    <input className="form-control" type="text" name="meta_title" onChange={handleChange} placeholder="Meta Title" />
                                </div>
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="metatitle">Meta Keyword</label>
                                    <input className="form-control" type="text" name="meta_keywords" onChange={handleChange} placeholder="Meta Keyword" />
                                </div>
                                <div className="col-md-12 form-group mb-5">
                                    <label htmlFor="metatitle">Meta Description</label>
                                    <textarea className="form-control" row="3" name="meta_description" onChange={handleChange} ></textarea>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <span>Publish</span>
                                    <label className="switch pl-5 switch-success ml-3">
                                    <input type="checkbox" name="publish" checked={isActive} onChange={handleToggle} />
                                    <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStaticLayout
