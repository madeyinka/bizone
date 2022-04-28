import React from 'react'
//import { Link } from 'react-router-dom'

function ContentsLayout({DataTable}) {
    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Contents</h1>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li>Contents</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <div className="card text-left">
                        {/* <div className="card-body">
                            <h4 className="card-title mb-3">Contents</h4>
                        </div> */}
                        <div className="card-body">
                            <div className="table-responsive">
                                {DataTable}
                                {/* <table className="display nowrap table table-striped table-bordered" id="scroll_horizontal_table" style={{width:"100%"}}>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Type</th>
                                            <th>Author</th>
                                            <th>Status</th> 
                                            <th>Last Modified</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Super Eagles defeated the falcons of sudan by 3-1 in th...</td>
                                            <td>Sports</td>
                                            <td>Article</td>
                                            <td>Olajide</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Are Nigerian men more affectionate to foreign women...</td>
                                            <td>Lifestyle</td>
                                            <td>Article</td>
                                            <td>Lamb</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Why is the Nigerian Entertainment Industry more lucrat...</td>
                                            <td>Culture</td>
                                            <td>Video</td>
                                            <td>Thompson</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>It’s a new era for innovators with the new Twitter..</td>
                                            <td>Technology</td>
                                            <td>Article</td>
                                            <td>Adams</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>APC reconciliation suffers setback, Kwara, Osun factions...</td>
                                            <td>Politics</td>
                                            <td>Article</td>
                                            <td>Ademola</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Super Eagles defeated the falcons of sudan by 3-1 in th...</td>
                                            <td>Sports</td>
                                            <td>Article</td>
                                            <td>Olajide</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Are Nigerian men more affectionate to foreign women...</td>
                                            <td>Lifestyle</td>
                                            <td>Article</td>
                                            <td>Lamb</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Why is the Nigerian Entertainment Industry more lucrat...</td>
                                            <td>Culture</td>
                                            <td>Video</td>
                                            <td>Thompson</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>It’s a new era for innovators with the new Twitter..</td>
                                            <td>Technology</td>
                                            <td>Article</td>
                                            <td>Adams</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>APC reconciliation suffers setback, Kwara, Osun factions...</td>
                                            <td>Politics</td>
                                            <td>Article</td>
                                            <td>Ademola</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Super Eagles defeated the falcons of sudan by 3-1 in th...</td>
                                            <td>Sports</td>
                                            <td>Article</td>
                                            <td>Olajide</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Are Nigerian men more affectionate to foreign women...</td>
                                            <td>Lifestyle</td>
                                            <td>Article</td>
                                            <td>Lamb</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>Why is the Nigerian Entertainment Industry more lucrat...</td>
                                            <td>Culture</td>
                                            <td>Video</td>
                                            <td>Thompson</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>It’s a new era for innovators with the new Twitter..</td>
                                            <td>Technology</td>
                                            <td>Article</td>
                                            <td>Adams</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>APC reconciliation suffers setback, Kwara, Osun factions...</td>
                                            <td>Politics</td>
                                            <td>Article</td>
                                            <td>Ademola</td>
                                            <td>Published</td>
                                            <td>16th Jan, 2022</td>
                                            <td><Link className="text-success mr-2" to="dashboard"><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link><Link className="text-danger mr-2" to="dashboard"><i className="nav-icon i-Close-Window font-weight-bold"></i></Link></td>
                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentsLayout
