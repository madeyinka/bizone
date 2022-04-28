import React from 'react'
import ResetPasswordLayout from '../../../layouts/Reset'
import useForm from './useForm'

function ResetPasswordComponent() {

    return (
        <>
        <ResetPasswordLayout form={useForm()}/>
        </>
        
    )
}

export default ResetPasswordComponent

