import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../../../helpers/axiosInstance'
import ServicesLayout from '../../../../../layouts/Services/Services'
import DataTable from '../../../../../components/DataTable'
import {formatter} from '../../../../../utils/moment' 

function ServicesComponent() {

    const [services, setServices] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (services.length === 0) {
            axiosInstance().get('service/pull?sortby=createdAt&orderby=desc&client_id='+user.id)
            .then(res => {
                if (!res.data.error) {
                    setServices(res.data.response)
                }
            })
        }
    },[services, user])

    const rowData = () => {
        const row = []
        services.forEach((item) => {
            const data = {
                name: item.name,
                group: item.group_name,
                description: item.description.slice(0, 45),
                createdAt: formatter(item.createdAt),
                action: [<Link className="text-success mr-3 ml-2" to={"/dashboard/service/edit/"+item._id}><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link>, <span className="text-danger mr-2"><i className="nav-icon i-Close-Window font-weight-bold"></i></span>]
            }
            row.push(data)
        })
        return row
    }

    const dataset = {
        columns: [
            {
                label:"Name",
                field:"name",
                width:150
            },
            {
                label:"Group",
                field:"group",
                width:150
            },
            {
                label:"Description",
                field:"description",
                width:200
            },
            {
                label:"Created On",
                field:"createdAt",
                width:150
            },
            {
                label:"Action",
                field:"action",
                width:150
            }
        ],
        rows: rowData()
    }

    return (
        <ServicesLayout
            DataTable={DataTable([10, 25, 50], 10, 4, dataset)} 
        />
    )
}

export default ServicesComponent
