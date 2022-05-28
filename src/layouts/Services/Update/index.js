import React from 'react'
import ReactQuill from "react-quill"
import EditorToolbar, { modules, formats } from "../../../components/Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";

function UpdateServiceLayout({handleChange, handleCategory, handleContent, content, handleImage, uploadImage, image, data, status, handleStatus, group, groups, onSubmit}) {
  return (
    <div className="main-content">
            <div className="breadcrumb">
                <h1>Services</h1>
                <ul>
                    <li><a href="dashboard">Dashboard</a></li>
                    <li>Modify</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-title mb-3">Update Service</div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="title">Service Name</label>
                                    <input className="form-control" type="text" name="name" onChange={handleChange} defaultValue={data.name} placeholder="Name of Service" />
                                </div>
                                <div className="col-md-12 form-group mb-4">
                                    <label htmlFor="slug">Slug</label>
                                    <input className="form-control" type="text" name="slug" onChange={handleChange} defaultValue={data.slug} placeholder="Slug (optional)" />
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label htmlFor="title">Group</label>
                                    <select className="form-control" onChange={e => handleCategory(e.target.value)} value={group}>
                                        <option>Select Service Group</option>
                                        {groups.map((item, index) => (
                                            <option key={index} value={item._id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 form-group mb-4">
                                    <label htmlFor="slug">Service Icon</label>
                                    <input className="form-control" type="text" name="icon" onChange={handleChange} defaultValue={data.icon} placeholder="Icon Class e.g: fa fa-eye" />
                                </div>
                                <div className="col-md-12">
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
                                <div className="col-md-12">
                                    <button className="btn btn-primary" onClick={onSubmit}>Modify Service</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 input-group mb-3">
                                    <div className="custom-file">
                                        <input className="custom-file-input" type="file"  onChange={handleImage}/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                    </div>
                                    <div className="input-group-append"><span className="input-group-text" onClick={uploadImage} >Upload</span></div>
                                </div>
                                <div className="col-md-12 input-group mb-5">
                                    <input className="form-control" type="text" onChange={handleChange} defaultValue={image} placeholder="Enter URL path for image" />
                                </div>
                                {/* <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="metatitle">Meta Title</label>
                                    <input className="form-control" type="text" placeholder="Meta Title" />
                                </div>
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="metatitle">Meta Keyword</label>
                                    <input className="form-control" type="text" placeholder="Meta Keyword" />
                                </div>
                                <div className="col-md-12 form-group mb-5">
                                    <label htmlFor="metatitle">Meta Description</label>
                                    <textarea className="form-control" row="3"></textarea>
                                </div> */}
                                <div className="col-md-12 mb-3">
                                <span>Publish</span>
                                <label className="switch pl-5 switch-success ml-3">
                                <input type="checkbox" checked={status} onChange={handleStatus}/>
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

export default UpdateServiceLayout