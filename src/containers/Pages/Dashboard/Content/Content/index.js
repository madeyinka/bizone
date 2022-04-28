import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ContentsLayout from '../../../../../layouts/Content/Contents'
import axiosInstance from '../../../../../helpers/axiosInstance'
import DataTable from '../../../../../components/DataTable'
import {formatter} from '../../../../../utils/moment' 

function ContentsComponent() {

    const [Contents, setContents] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (Contents.length === 0) {
            axiosInstance()
            .get("content/pull?sortby=createdAt&orderby=desc&client_id="+user.id)
            .then(res => {
                if (!res.data.error) {
                    setContents(res.data.response)
                }
            })
        }
    },[Contents, user])


    const rowData = () => {
        const row = []
        Contents.forEach((item) => {
            const data = {
                title: item.title.slice(0, 40) + '...',
                category:item.category_label,
                type:item.type,
                author:item.author,
                status:(item.status ? "Published":"Unpublished"),
                last_modified:formatter(item.updatedAt),
                action:[<Link className="text-success mr-3 ml-2" to={"/dashboard/content/edit/"+item._id}><i className="nav-icon i-Pen-2 font-weight-bold"></i></Link>, <span className="text-danger mr-2"><i className="nav-icon i-Close-Window font-weight-bold"></i></span>]
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
                width:270
            },
            {
                label:"Category",
                field:"category",
                width:150
            },
            {
                label:"Type",
                field:"type",
                width:150
            },
            {
                label:"Author",
                field:"author",
                width:150
            },
            {
                label:"Status",
                field:"status",
                width:150
            },
            {
                label:"Last Modified",
                field:"last_modified",
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
        <ContentsLayout
            DataTable={DataTable([10, 25, 50], 10, 4, dataset)}
         />
    )
}

export default ContentsComponent
