import React from 'react'

function ServicesLayout({DataTable}) {
    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Services</h1>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <div className="card text-left">
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

export default ServicesLayout
