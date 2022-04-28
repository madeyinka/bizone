import React from 'react'
//import AdminComponent from '../../containers/Pages/Dashboard/Home/Admin'
import ContentComponent from '../../containers/Pages/Dashboard/Home/Content'
import CommerceComponent from '../../containers/Pages/Dashboard/Home/Commerce'

function DashboardRoute() {

    const type = JSON.parse(localStorage.getItem('user'))

     if (type && type.product === 'admin'){
        return <ContentComponent />
     } 
     if (type.product === 'commerce') {
         return <CommerceComponent />
     } 
     if (type.product === 'content') {
         return <ContentComponent />
     }  
}

export default DashboardRoute