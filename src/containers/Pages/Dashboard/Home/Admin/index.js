import React, { useContext } from 'react'
import { GlobalContext } from '../../../../../contexts/Provider'

function AdminComponent() {

    const context = useContext(GlobalContext)
    console.log('context', context)
   
    return (
        <div>
            <h1>Admin Dashboard</h1>
        </div>
    )
}

export default AdminComponent
