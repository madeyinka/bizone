import React from 'react'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {


    return (
        <div className="app-admin-wrap layout-sidebar-large">
            <Header/>
            <SideNav/>
            <div className="main-content-wrap sidenav-open d-flex flex-column">
                <Outlet/>
                <Footer />
            </div>
        </div>
    )
}

export default DashboardLayout