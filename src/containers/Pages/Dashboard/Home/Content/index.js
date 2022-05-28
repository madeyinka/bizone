import React from 'react'

function ContentComponent() {
    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1 className="mr-2">Dashboard</h1>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row">
                <div className="col-md-3 col-lg-3">
                    <div className="card mb-4 o-hidden">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <h5 className="t-font-bolder">Bounce Rate</h5><small className="text-muted">Unengaged Sessions</small>
                                </div>
                                <div className="col-5 text-right">
                                    <h3 className="t-font-boldest">62%</h3>
                                </div>
                                <div className="col-12">
                                    <div className="progress mt-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3">
                    <div className="card mb-4 o-hidden">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <h5 className="t-font-bolder">Session/User</h5><small className="text-muted">Sessions Per User</small>
                                </div>
                                <div className="col-5 text-right">
                                    <h3 className="t-font-boldest">62%</h3>
                                </div>
                                <div className="col-12">
                                    <div className="progress mt-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3">
                    <div className="card mb-4 o-hidden">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <h5 className="t-font-bolder">Engmt. Rate</h5><small className="text-muted">Engaged Sessions</small>
                                </div>
                                <div className="col-5 text-right">
                                    <h3 className="t-font-boldest">62%</h3>
                                </div>
                                <div className="col-12">
                                    <div className="progress mt-3">
                                        <div className="progress-bar bg-success" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3">
                    <div className="card mb-4 o-hidden">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <h5 className="t-font-bolder">View/Session</h5><small className="text-muted">Views Per Session</small>
                                </div>
                                <div className="col-5 text-right">
                                    <h3 className="t-font-boldest">62%</h3>
                                </div>
                                <div className="col-12">
                                    <div className="progress mt-3">
                                        <div className="progress-bar" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 mb-4">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="card-title border-bottom d-flex align-items-center m-0 p-3"><span>User Activity</span><span className="flex-grow-1"></span><span className="badge badge-pill badge-warning">Updated daily</span></div>
                                        <div className="d-flex border-bottom justify-content-between p-3">
                                            <div className="flex-grow-1"><span className="text-small text-muted">Active users</span>
                                                <h5 className="m-0">465</h5>
                                            </div>
                                            <div className="flex-grow-1"><span className="text-small text-muted">Daily Active / Monthly Active</span>
                                                <h5 className="m-0">2065</h5>
                                            </div>
                                            
                                            <div className="flex-grow-1"><span className="text-small text-muted">Active 1 day ago</span>
                                                <h5 className="m-0">23456</h5>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom justify-content-between p-3">
                                            <div className="flex-grow-1"><span className="text-small text-muted">New users</span>
                                                <h5 className="m-0">735</h5>
                                            </div>
                                            <div className="flex-grow-1"><span className="text-small text-muted">Daily Active / Weekly Active</span>
                                                <h5 className="m-0">1829</h5>
                                            </div>
                                            
                                            <div className="flex-grow-1"><span className="text-small text-muted">Active Last 7 Days</span>
                                                <h5 className="m-0">92565</h5>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between p-3">
                                            <div className="flex-grow-1"><span className="text-small text-muted">Total users</span>
                                                <h5 className="m-0">165</h5>
                                            </div>
                                            <div className="flex-grow-1"><span className="text-small text-muted">Weekly Active / Monthly Active</span>
                                                <h5 className="m-0">3165</h5>
                                            </div>
                                            
                                            <div className="flex-grow-1"><span className="text-small text-muted">Active Last 28 Days</span>
                                                <h5 className="m-0">32165</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="card text-left">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Website Metrics</h4>
                                    <div className="table-responsive">
                                        <table className="display table table-striped table-bordered" id="zero_configuration_table" style={{"width":"140%"}}>
                                            <thead>
                                                <tr>
                                                    <th>Page Title</th>
                                                    <th>Views</th>
                                                    <th>Users</th>
                                                    <th>New Users</th>
                                                    <th>Avg. Time</th>
                                                    <th>Evt. Count</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Blue Coral Healthcare Services - Healthcare At Its Best</td>
                                                    <td>795</td>
                                                    <td>626</td>
                                                    <td>606</td>
                                                    <td>0m23s</td>
                                                    <td>3,513</td>
                                                </tr>
                                                <tr>
                                                    <td>Blue Coral Healthcare Services - Healthcare At Its Best</td>
                                                    <td>795</td>
                                                    <td>626</td>
                                                    <td>606</td>
                                                    <td>0m23s</td>
                                                    <td>3,513</td>
                                                </tr>
                                                <tr>
                                                    <td>Blue Coral Healthcare Services - Healthcare At Its Best</td>
                                                    <td>795</td>
                                                    <td>626</td>
                                                    <td>606</td>
                                                    <td>0m23s</td>
                                                    <td>3,513</td>
                                                </tr>
                                                <tr>
                                                    <td>Blue Coral Healthcare Services - Healthcare At Its Best</td>
                                                    <td>795</td>
                                                    <td>626</td>
                                                    <td>606</td>
                                                    <td>0m23s</td>
                                                    <td>3,513</td>
                                                </tr>
                                                <tr>
                                                    <td>Blue Coral Healthcare Services - Healthcare At Its Best</td>
                                                    <td>795</td>
                                                    <td>626</td>
                                                    <td>606</td>
                                                    <td>0m23s</td>
                                                    <td>3,513</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                <div className="row">
                        <div className="col-xl-12 col-md-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title mb-0">Recent Posts</div>
                                    <div className="ul-widget-s6__items ul-widget-card__position">
                                        <div className="ul-widget-card__item"><span className="ul-widget-s6__badge ul-widget-card__dot">
                                                <p className="badge-dot-primary ul-widget6__dot ul-widget-card__dot-xl"><i className="i-Add text-white"></i></p>
                                            </span>
                                            <div className="ul-widget-card__info-v2"><span className="t-font-boldest">Osimhen close to breaking Martins goals</span><span className="t-font-bold">It is a long established fact that a reader will be distracted.</span><small className="text-mute">3 Days Ago</small></div>
                                        </div>
                                        <div className="ul-widget-card__item"><span className="ul-widget-s6__badge ul-widget-card__dot">
                                                <p className="badge-dot-primary ul-widget6__dot ul-widget-card__dot-xl"><i className="i-Add text-white"></i></p>
                                            </span>
                                            <div className="ul-widget-card__info-v2"><span className="t-font-boldest">Osimhen close to breaking Martins goals</span><span className="t-font-bold">It is a long established fact that a reader will be distracted.</span><small className="text-mute">3 Days Ago</small></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ContentComponent
