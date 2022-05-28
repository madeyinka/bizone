import React from 'react'
import { Link } from 'react-router-dom'
 
function ClientsLayout({DataTable}) {
    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Clients</h1>
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li>Clients</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <div className="card text-left">
                        {/* <div className="card-body">
                            <h4 className="card-title mb-3">All Clients</h4>
                        </div> */}
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

export default ClientsLayout
