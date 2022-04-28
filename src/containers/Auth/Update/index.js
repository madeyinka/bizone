import React from 'react'
import UpdatePasswordLayout from '../../../layouts/Update'
import useForm from './useForm'

function UpdatePasswordComponent() {

    return (
        <>
        <UpdatePasswordLayout form={useForm()}/>
        </>
        
    )
}

export default UpdatePasswordComponent
