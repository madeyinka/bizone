import React from 'react'

function GroupLayout({handleChange, formValues, title, onSubmit, DataTable}) {
  return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Service Groups</h1>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li>Groups</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-title mb-3">{title}</div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-2">
                                    <label htmlFor="title">Name</label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="name" 
                                        value={formValues.name}
                                        onChange={handleChange} 
                                        placeholder="Name of Group" 
                                    />
                                </div>
                                <div className="col-md-12 form-group mb-2">
                                    <label htmlFor="title">Slug</label>
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="slug" 
                                        value={formValues.slug}
                                        onChange={handleChange} 
                                        placeholder="Slug (Optional)" 
                                    />
                                </div>
                                <div className="col-md-12 form-group mb-3">
                                    <label htmlFor="description">Description</label>
                                    <textarea 
                                        className="form-control" 
                                        row="3" 
                                        name="description" 
                                        value={formValues.description}
                                        onChange={handleChange} 
                                        placeholder="Description">
                                    </textarea>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                {DataTable}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default GroupLayout