import React, {useEffect, useState} from 'react'
import axiosInstance from '../../../../../helpers/axiosInstance'
import GroupLayout from '../../../../../layouts/Services/Groups'
import DataTable from '../../../../../components/DataTable'
import { formatter } from '../../../../../utils/moment'


function GroupComponent() {
  const initialValue = {name:"", slug:"", description:""}
  const [formValues, setFormValues] = useState(initialValue)
  const [groups, setGroups] = useState([])
  const [title, setTitle] = useState("Add Service Group")

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if(groups.length === 0){
      axiosInstance().get("service/group/pull?sortby=createdAt&orderby=desc&client_id="+ user.id)
      .then(res => {
        if (!res.data.error) {
          setGroups(res.data.response)
        }
      })  
    }
  }, [groups, user])

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (formValues.identity) {
      const resp = await axiosInstance().post('service/group/modify', formValues)
      if (resp && resp.data){
        setFormValues(initialValue)
        fetchGroups()
        setTitle('Add Service Group')
      }

    } else {
      const resp = await axiosInstance().post('service/group/create', formValues)
      if (resp && resp.data) {
          setFormValues(initialValue)
          fetchGroups()
      }
    }
  }

  const fetchGroups = async () => {
    return await axiosInstance().get("service/group/pull?sortby=createdAt&orderby=desc&client_id="+ user.id)
    .then(res => {
      if (!res.data.error) {
        setGroups(res.data.response)
      }
    })
  }

  const groupRow = () => {
    const row = []
    groups.forEach((item) => {
      const data = {
        name:item.name.slice(0, 25),
        description:item.description.slice(0, 35),
        createdAt:formatter(item.createdAt),
        action:[<span className="text-success mr-3 ml-2" onClick={() => {editGroup(item._id)}}><i className="nav-icon i-Pen-2 font-weight-bold"></i></span>, <span className="text-danger mr-2"><i className="nav-icon i-Close-Window font-weight-bold"></i></span>]
      }
      row.push(data)
    })
    return row
  }

  const editGroup = (id) => {
    axiosInstance().get("service/group/by-identity?identity="+id)
    .then(res => {
      if (!res.data.error){
        setFormValues({
          identity:res.data.response._id,
          name:res.data.response.name,
          slug:res.data.response.slug,
          description:res.data.response.description,
        })
        setTitle("Modify Group")
      }
    })
  }

  const dataset = {
    columns: [
      {
        "label":"Name",
        "field":"name",
        "width":150
      },
      {
        "label":"Description",
        "field":"description",
        "width":270
      },
      {
        "label":"Created On",
        "field":"createdAt",
        "width":150
      },
      {
        "label":"Action",
        "field":"action",
        "width":150
      }    
    ], 
    rows: groupRow()
  }


  return (
    <GroupLayout 
      handleChange={handleChange}
      formValues={formValues}
      onSubmit={onSubmit}
      groups={groups}
      DataTable={DataTable([5, 10, 20], 5, 4, dataset)}
      title={title}
    />
  )
}

export default GroupComponent