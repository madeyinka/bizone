import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import StaticLayout from '../../../../../layouts/Static/Static'
import axiosInstance from '../../../../../helpers/axiosInstance'
import DataTable from '../../../../../components/DataTable'
import {formatter} from '../../../../../utils/moment' 


function StaticComponent() {

    const user = JSON.parse(localStorage.getItem('user'))
    const [Blocks, setBlocks] = useState([])

    useEffect(() => {
        if (Blocks.length === 0) {
            axiosInstance()
            .get("page/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
            .then(res => {
                if (!res.data.error) {
                    setBlocks(res.data.response)
                } 
            })
        }
    },[user, Blocks])

    const rowData = () => {
        const row = []
        Blocks.forEach((item) => {
            const data = {
                "title":item.title,
                "description":item.content.slice(0, 50),
                "status":(item.status ? "Published":"Unpublished"),
                "createdAt": formatter(item.createdAt),
                "updatedAt": formatter(item.updatedAt),
                "action":[<Link className="text-success mr-3 ml-2" to={"/dashboard/static/edit/"+item._id}><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link>, <span className="text-danger mr-2"><i className="nav-icon i-Close-Window font-weight-bold"></i></span>]
            }
            row.push(data)
        })
        return row
    }

    const dataset = {
        columns: [
            {
                label:"Title",
                field:"title",
                width:150
            },
            {
                label:"Descrption",
                field:"description",
                width:270
            },
            {
                label:"Status",
                field:"status",
                width:150
            },
            {
                label:"Created On",
                field:"createdAt",
                width:150
            },
            {
                label:"Last Updated",
                field:"updatedAt",
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
            <StaticLayout
                DataTable={DataTable([10, 25, 50], 10, 4, dataset)}
            />
    )
}

export default StaticComponent
