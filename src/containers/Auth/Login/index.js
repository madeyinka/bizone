import React from 'react'
import LoginLayout from '../../../layouts/Login'
import useForm from './useForm'

function LoginComponent() {

    return (
        <>
        <LoginLayout form={useForm()}/>
        </>
        
    )
}

export default LoginComponent
