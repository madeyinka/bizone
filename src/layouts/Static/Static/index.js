import React from 'react'

function StaticLayout({DataTable}) {

    return (
        <div className="main-content">
            <div className="breadcrumb">
                <h1>Pages</h1>
                <ul>
                    <li><a href="dashboard">Dashboard</a></li>
                    <li>Pages</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top"></div>
            <div className="row mb-4">
                <div className="col-md-12 mb-4">
                    <div className="card text-left">
                        {/* <div className="card-body">
                            <h4 className="card-title mb-3">Pages</h4>
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

export default StaticLayout