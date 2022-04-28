import React from 'react'
import { Link } from 'react-router-dom'

function AddClientLayout({handleChange, handleSubmit, imageURL, status, publish, handlePublishChange, handleStatusChange, handleImage, uploadImage, validateForm, loading, error}) {
    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Client</h1>
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li>Add New</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                {/* <form> */}
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-title mb-3">Add New Client</div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="firstName">First name</label>
                                        <input className="form-control" type="text" name="firstname" onChange={handleChange} placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="lastName">Last name</label>
                                        <input className="form-control" type="text" name="lastname" onChange={handleChange} placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="email">Email Address</label>
                                        <input className="form-control" type="email" placeholder="Email Address" name="email" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input className="form-control" type="text" placeholder="Phone Number" name="phone" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="company">Company / Business Name</label>
                                        <input className="form-control" type="text" placeholder="Company / Business Name" name="company" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="sector">Sector</label>
                                        <input className="form-control" type="text" placeholder="Sector" name="sector" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="platform">Platform Type</label>
                                        <input className="form-control" type="text" placeholder="Platform Type" name="product" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="role">Role</label>
                                        <input className="form-control" type="text" placeholder="User Role" name="role" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="address">Address</label>
                                        <input className="form-control" type="text" placeholder="Address" name="address" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="state">State</label>
                                        <input className="form-control" type="text" placeholder="State"  name="state" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="lga">LGA</label>
                                        <input className="form-control" type="text" placeholder="LGA" name="lga" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="website">Website URL</label>
                                        <input className="form-control" type="text" placeholder="Website" name="website" onChange={handleChange} />
                                    </div>
                                    <div className="row col-md-12">
                                        <div className="col-md-4 mt-2">
                                            {loading && <button  disabled className="btn btn-primary">Loading...</button>}  
                                            {!loading && <button className="btn btn-primary" disabled={validateForm} type="submit" onClick={handleSubmit}>Add New Client</button>}
                                        </div>

                                        {error  && <div className="col-md-6 alert alert-danger ml-auto" role="alert"><strong className="text-capitalize">Error Encountered!</strong> 
                                        <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                {/* <div className="user-profile mb-4">
                                    <div className="ul-widget-card__user-info pb-3"><img className="profile-picture avatar-xl mb-2" src="https://via.placeholder.com/240x240?text=BRAND LOGO" alt="alt" />
                                        <p className="text-muted m-0">Supports *jpg, *png, *jpeg</p>
                                    </div>
                                </div> */}
                                <div className="user-profile mb-4">
                                    <div className="ul-widget-card__user-info pb-3">
                                        <img className="profile-picture avatar-xl mb-2" src={imageURL} alt="alt" />
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
                                <div className="input-group mb-4">
                                    <input className="form-control" type="hidden" name="logo" defaultValue={imageURL} placeholder="URL path for image" />
                                </div>

                                {/* <div className="input-group mb-5">
                                    <div className="custom-file">
                                        <input className="custom-file-input" type="file" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                    </div>
                                    <div className="input-group-append"><span className="input-group-text" >Upload</span></div>
                                </div> */}
                                <div className="mb-3">
                                    <span>Status</span>
                                    <label className="switch pl-5 switch-success ml-3">
                                    <input type="checkbox" checked={status} onChange={handleStatusChange} />
                                    <span className="slider"></span>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <span>Publish</span>
                                    <label className="switch pl-5 switch-success ml-3">
                                    <input type="checkbox" checked={publish} onChange={handlePublishChange} />
                                    <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}

export default AddClientLayout
