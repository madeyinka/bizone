import { useState, useContext } from "react"
import { reset } from "../../../contexts/actions/auth/reset"
import {GlobalContext} from '../../../contexts/Provider'
//import { useNavigate } from "react-router-dom";

const useForm =  () => {
    const initialValues = {email:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formError, setFormError] = useState(false)

   

    //const navigate = useNavigate();

    const {authDispatch, authState:{auth:{loading, data:{error, message}}}} = useContext(GlobalContext)


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        reset(formValues)(authDispatch)
        if (error) setFormError(true)
        setFormValues(initialValues)
    }

    //make this link to reset password success...okay
    // useEffect(() => {
    //     if (response) {
    //         navigate("/dashboard")
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[response])

    const validateForm = !formValues.email?.length


    return {formValues, handleChange, loading, formError, message, validateForm, handleSubmit}
}

export default useForm