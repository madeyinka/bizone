import React, {useState, useEffect} from 'react'
import ClientsLayout from '../../../../../layouts/Clients/Clients'
import axiosInstance from '../../../../../helpers/axiosInstance'
import DataTable from '../../../../../components/DataTable'

function ClientsComponent() {

    const [Clients, setClients] = useState([])

    useEffect(() => {
        if (Clients.length === 0) {
            axiosInstance()
            .get("client/pull?sortby=createdAt&orderby=desc")
            .then(res => {
                if (!res.data.error) {
                    setClients(res.data.response)
                }
            })
        }
    }, [Clients])   

    // const column = [
    //     {label:"First Name", field:"firstname", width:150},
    //     {label:"Last Name", field:"lastname", width:150},
    //     {label:"Email", field:"email", width:150},
    //     {label:"Company", field:"company", width:150},
    //     {label:"Platform", field:"product_type", width:150},
    //     {label:"Role", field:"role", width:150},
    //     {label:"Status", field:"status", width:150},
    //     {label:"Action", field:"action", width:150} 
    // ]

    const delClient = (id) => {
        console.log(id)
    }

    const rowData = () => {
        const row = []
        Clients.forEach((item) => {
            const data = {
                firstname: item.fname,
                lastname: item.lname,
                email:item.email,
                company:item.company,
                product:item.product_type,
                role:item.role,
                status: item.publish ? "active" : "inactive",
                action: [<a className="text-success mr-3" href={"/dashboard/client/edit/"+item._id}><i className="nav-icon i-Pen-2 font-weight-bold"></i></a>, 
                <span className="text-danger" onClick={() => {delClient(item._id)}}><i className="nav-icon i-Close-Window font-weight-bold"></i></span>]// passfunction
            }
            row.push(data)
        })
        return row
    }

    const dataset = {
        columns: [
            {
                label: "First Name",
                field: "firstname",
                sort: "desc",
                width: 150
            },
            {
                label: "Last Name",
                field: "lastname",
                sort: "desc",
                width: 150
            },
            {
                label: "Email",
                field: "email",
                sort: "desc",
                width: 270
            },
            {
                label: "Company",
                field: "company",
                sort: "desc",
                width: 250
            },
            {
                label: "Platform",
                field: "product",
                sort: "desc",
                width: 100
            },
            {
                label: "Role",
                field: "role",
                sort: "desc",
                width: 100
            },
            {
                label: "Status",
                field: "status",
                sort: "desc",
                width: 150
            },
            {
                label: "Action",
                field: "action",
                sort: "desc",
                width: 150
            }
        ],

        rows: rowData()
    }

    return (
        <>
            <ClientsLayout 
                DataTable={DataTable([5, 20, 25], 5, 4, dataset)}
            />
        </>
    )
}

export default ClientsComponent
