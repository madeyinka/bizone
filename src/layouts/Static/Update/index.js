import React from 'react';
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../../components/Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";

function UpdateBlockLayout({handleSubmit, handleChange, loading, error, data, isActive, content, handleToggle, handleContentChange}) {
    
  return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Block</h1> 
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li>Edit Block</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-title mb-3">Update Block</div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input className="form-control" type="text" name="title" onChange={handleChange} defaultValue={data?.title} placeholder="Title" />
                                </div>

                                <div className="col-md-12 form-group mb-4">
                                    <label htmlFor="slug">Slug</label>
                                    <input className="form-control" type="text" name="slug" onChange={handleChange} defaultValue={data?.slug} placeholder="Slug (optional)" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="slug">Content</label>
                                    <div className="text-editor">
                                        <EditorToolbar />
                                        <ReactQuill 
                                            theme="snow"
                                            value={content}
                                            onChange={handleContentChange}
                                            placeholder={"Write something here..."}
                                            modules={modules}
                                            formats={formats}
                                            style={{height: '200px'}}
                                        />
                                    </div>
                                </div>
                                
                                <div className="row col-md-12">
                                    <div className="col-md-4 mt-2">
                                        {loading && <button  disabled className="btn btn-primary">Loading...</button>}
                                        {!loading && <button className="btn btn-primary" onClick={handleSubmit}>Modify Block</button>}
                                    </div>
                                    {/* {!Error && data && <div className="col-md-6 alert alert-success ml-auto" role="alert"><strong className="text-capitalize">Success!</strong> {message}
                                        <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>}
                                    {Error  && <div className="col-md-6 alert alert-danger ml-auto" role="alert"><strong className="text-capitalize">Error!</strong> {message}
                                        <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>} */}
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
                                    <input className="form-control" type="text" name="meta_title" onChange={handleChange} defaultValue={data?.meta_title} placeholder="Meta Title" />
                                </div>
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="metatitle">Meta Keyword</label>
                                    <input className="form-control" type="text" name="meta_keywords" onChange={handleChange} defaultValue={data?.meta_keywords} placeholder="Meta Keyword" />
                                </div>
                                <div className="col-md-12 form-group mb-5">
                                    <label htmlFor="metatitle">Meta Description</label>
                                    <textarea className="form-control" row="3" name="meta_description" onChange={handleChange} defaultValue={data?.meta_description} ></textarea>
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

export default UpdateBlockLayout;
