import React from 'react'

function ContactLayout({handleChange, onSubmit, formValues, units, editUnit, DataTable, isLoading, error}) {
  return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Contact</h1>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li>Contact Information</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="ul-widget__head pb-20 v-margin">
                                <div className="ul-widget__head-label">
                                    <h3 className="ul-widget__head-title">Units</h3>
                                </div>
                                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New Unit</button>
                                <div className="dropdown-menu bg-transparent shadow-none p-0 m-0" style={{"width": "320px"}}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title mb-1">Manage Unit</div>
                                            {/* <p>Lorem ipsum dolor sit amet.</p> */}
                                            <div className="d-flex flex-column">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="name" onChange={handleChange} value={formValues.name} placeholder="Name of Department" />
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="email" onChange={handleChange} value={formValues.email} placeholder="Email Address" />
                                                </div>
                                                <button className="btn btn-info pd-x-20" onClick={onSubmit} >Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ul-widget__body">
                                {units.length > 0 && units.map((unit) => (
                                    <div className="ul-widget2__item">
                                        <div className="ul-widget4__img"><label className="checkbox checkbox-outline-primary"><input type="checkbox" defaultChecked={false} /><span className="checkmark"></span></label></div>
                                        <div className="ul-widget2__info ul-widget4__users-info"><span className="ul-widget2__title">{unit.name}</span><span className="ul-widget2__username" href="#">{unit.email}</span></div>
                                        <button className="btn bg-white _r_btn border-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="_dot _inline-dot bg-primary"></span><span className="_dot _inline-dot bg-primary"></span><span className="_dot _inline-dot bg-primary"></span></button>
                                        <div className="dropdown-menu" x-placement="bottom-start" style={{"position": "absolute", "transform": "translate3d(0px, 33px, 0px)", "top": "0px", "left": "0px", "willChange": "transform"}}>
                                            <span className="dropdown-item ul-widget__link--font" onClick={()=>{editUnit(unit._id)}}><i className="i-Pen-2"> </i> Edit</span>
                                            <a className="dropdown-item ul-widget__link--font" href="widget-list.html#"><i className="i-Close"> </i> Delete</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="ul-widget__head pb-20 v-margin mb-3">
                                <div className="ul-widget__head-label">
                                    <h3 className="ul-widget__head-title">Manage Unit</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="name">Name of Unit</label>
                                    <input className="form-control" type="text" name="name" onChange={handleChange} value={formValues.name} placeholder="Name of Unit" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="name">Email of Unit</label>
                                    <input className="form-control" type="email" name="email" onChange={handleChange} value={formValues.email} placeholder="Email of Unit" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <button className="btn btn-info pd-x-20" onClick={onSubmit}>Submit</button>
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

            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem consequuntur unde? Dolore, dolor iusto.</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                <button class="btn btn-primary ml-2" type="button">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
  )
}

export default ContactLayout