/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import ContactLayout from '../../../../layouts/Contact'
import axiosInstance from '../../../../helpers/axiosInstance'
import DataTable from '../../../../components/DataTable'
import {formatter} from '../../../../utils/moment'


function ContactComponent() {
    const initialValue = {name:"", email:""}
    const [formValues, setFormValues] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [units, setUnits] = useState([])
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState({})
    const [selected, setSelected] = useState('')

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        if (units.length === 0) {
            axiosInstance().get('contact/unit/pull?sortby=createdAt&orderby=desc&client_id='+user.id)
            .then(res => {
                setUnits(res.data.response)
            })
        }
    },[units, user])

    useEffect(() => {
        if (contacts.length === 0) {
            axiosInstance().get('contact/pull?sortby=createdAt&orderby=desc&client_id='+user.id)
            .then(res => {
                if (!res.data.error) {
                    setContacts(res.data.response)
                }
            })
        }
    }, [contacts, user])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const editUnit = (identity) => {
        axiosInstance().get('contact/unit/by-identity?identity='+identity)
        .then(res => {
            setFormValues({identity:res.data.response._id,name:res.data.response.name,email:res.data.response.email})
        })
    }

    const fetchUnits = () => {
        return axiosInstance().get('contact/unit/pull?sortby=createdAt&orderby=desc&client_id='+user.id)
        .then(res => {
            if (!res.data.error) {
                setUnits(res.data.response)
            }
        })
    }

    // const fetchContacts = () => {
    //     return axiosInstance().get('contact/pull?sortby=createdAt&orderby=desc&client_id='+user.id)
    //     .then(res => {
    //         if (!res.data.error) {
    //             setContacts(res.data.response)
    //         }
    //     })
    // }

    const contactDetail = (id) => {
        const contact = contacts.find((contact) => contact._id === id)
        if (contact) setContact(contact)
    }

    const deleteMessage = (id) => {
        axiosInstance().get('contact/delete?identity='+id)
        .then(res => {
            if (!res.data.error) {
                window.location = '/dashboard/contact'
            }
        })
    }

    const rowData = () => {
        const row = []
        contacts.forEach((item) => {
            const data = {
                sender: item.sender,
                subject: item.subject.slice(0, 30),
                content: item.message.slice(0, 35),
                action:<>
                <div><span data-toggle="modal" data-target="#contactMessage" onClick={() => {contactDetail(item._id)}}><a href="#">View</a></span> | <span data-toggle="modal" data-target="#contactDelete" onClick={() => {setSelected(item._id)}} ><a href="#">Delete</a></span></div>
                <div className="modal fade" id="contactMessage" tabindex="-1" role="dialog" aria-labelledby="contactMessage" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="contactModalLabel">Contact Message</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="inbox-secondary-sidebar-container box-shadow-1" data-sidebar-container="secondary">
                                    <div data-sidebar-content="secondary" style={{"marginLeft":"10px", "paddingTop":"10px"}}>
                                        <div className="inbox-secondary-sidebar-content position-relative" style={{"minHeight": "350px"}}>
                                            <div className="inbox-details perfect-scrollbar rtl-ps-none" data-suppress-scroll-x="true">
                                                <div className="row no-gutters">
                                                    <div className="mr-2"><span className="badge badge-square-primary lg m-0">{contact.sender?.charAt(0)}</span></div>
                                                    <div className="col-xs-12">
                                                        <p className="m-0">{contact.sender}</p>
                                                        <p className="text-12 text-muted">{contact.unit_name} | {formatter(contact.createdAt)}</p>
                                                    </div>
                                                </div>
                                                <h4 class="mb-3">{contact.subject}</h4>
                                                <div>
                                                    <p>{contact.message}</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                                {/* <button className="btn btn-danger ml-2" type="button">Delete</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="contactDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle-2" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle-2">Are you sure you want to delete?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                                Please, confirm your action by clicking continue.
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-info" type="button" data-dismiss="modal">No, Cancel</button>
                                <button className="btn btn-danger ml-2" type="button" onClick={() => {deleteMessage(selected)}}>Yes, Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            }
            row.push(data)
        })
        return row
    }

    const dataset = {
        columns: [
            {
                label:"Sender",
                field:"sender",
                wdith:150
            },
            {
                label:"Subject",
                field:"subject",
                width:200
            },
            {
                label:"Message",
                field:"content",
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

    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        console.log(formValues)
        if (formValues.identity) {
            const resp = await axiosInstance().post("contact/unit/modify", formValues)
            if (resp && !resp.error){
                setIsLoading(false)
                setFormValues(initialValue)
                fetchUnits()
            }else{
                setError(resp.data.message)
            }
        } else {
            const resp = await axiosInstance().post("contact/unit/create", formValues)
            if (resp && !resp.error){
                setIsLoading(false)
                setFormValues(initialValue)
                fetchUnits()
            }else{
                setError(resp.data.message)
            }
        }       
    }

  return (
    <ContactLayout 
        DataTable={DataTable([10, 25, 50], 10, 4, dataset)}
        handleChange={handleChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
        error={error}
        units={units}
        editUnit={editUnit}
        formValues={formValues}
    />
  )
}

export default ContactComponent