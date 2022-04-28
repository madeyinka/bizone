import React from 'react'

function UpdateProfileLayout({response, handleChange, handleSubmit, handleImage, uploadImage, url, updateImage}) {
    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Update Profile</h1>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li>Update Profile</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                	<div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-title mb-3">User Information</div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="firstName">First name</label>
                                            <input className="form-control" type="text" name="firstname" defaultValue={response.fname} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="lastName">Last name</label>
                                            <input className="form-control" type="text" name="lastname" defaultValue={response.lname} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="email">Email address</label>
                                            <input className="form-control" type="email" name="email" defaultValue={response.email} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="form-control" type="text" name="phone" defaultValue={response.phone} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="company">Company</label>
                                            <input className="form-control" type="text" name="company" defaultValue={response.company} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="sector">Sector</label>
                                            <input className="form-control" type="text" name="sector" defaultValue={response.sector} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="address">Address</label>
                                            <input className="form-control" type="text" name="address" defaultValue={response.address} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="role">Role (Job Position)</label>
                                            <input className="form-control" type="text" name="role" defaultValue={response.role} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="state">State</label>
                                            <input className="form-control" type="text" name="state" defaultValue={response.state} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="lga">LGA</label>
                                            <input className="form-control" type="text" name="lga" defaultValue={response.lga} onChange={handleChange} />
                                        </div>
                                        
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="title">Site Title</label>
                                            <input className="form-control" type="text" name="title" defaultValue={response.site_title} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="website">Website</label>
                                            <input className="form-control" type="text" name="website" defaultValue={response.website} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-12 form-group mb-3">
                                            <label htmlFor="picker2">Description</label>
                                            <textarea className="form-control" type="text" name="site_desc" defaultValue={response.site_desc} onChange={handleChange} ></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Update</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                            {/* <div className="card-title">Upload Avatar</div> */}
                                <div className="user-profile mb-4">
                                    <div className="ul-widget-card__user-info pb-3">

                                        <img className="profile-picture avatar-xl mb-2" src={url ? url : response.avatar} alt="alt" />

                                        <p className="text-muted m-0">Supports *jpg, *png, *jpeg</p>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="custom-file mr-1">
                                        <input className="custom-file-inpu" name="image" onChange={handleImage} type="file" />
                                        <label className="custom-file-labe" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02"></label>
                                    </div>
                                    <button className="input-group-append btn btn-primary" onClick={uploadImage}>Upload</button>
                                </div>
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" name="avatar" defaultValue={url} placeholder="URL path for image" />
                                </div>
                                <button className="btn btn-primary btn-block" onClick={updateImage}>Update Image</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default UpdateProfileLayout
