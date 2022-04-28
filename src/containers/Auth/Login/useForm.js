/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react"
import { login } from "../../../contexts/actions/auth/login"
import {GlobalContext} from '../../../contexts/Provider'
import { useNavigate } from "react-router-dom";

const useForm =  () => {
    const initialValues = {email:"", password:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formError, setFormError] = useState(false)


    let navigate = useNavigate();

    const {currentUser, setCurrentUser, authDispatch, authState:{auth:{loading, data:{error, message, response}}}} = useContext(GlobalContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError(error)
        login(formValues)(authDispatch)
        
    }

    useEffect(() => {
        setCurrentUser(response)
        localStorage.setItem('user', JSON.stringify(response))
    }, [response])

    useEffect(() => {
        if (currentUser.isAuthenticated){
            navigate('/dashboard')
        }
    }, [currentUser.isAuthenticated])


    const validateForm = !formValues.email?.length || !formValues.password?.length


    return {formValues, handleChange, loading, formError, message, validateForm, handleSubmit}
}

export default useForm