import { useEffect, useState, useContext } from "react"
import { update } from "../../../contexts/actions/auth/update"
import {GlobalContext} from '../../../contexts/Provider'
import { useParams } from "react-router-dom";

const useForm =  () => {
    const initialValues = {password:"", password_confirm:""}
    const [formValues, setFormValues] = useState(initialValues)
    const { identity, key } = useParams()
    const payload = {identity, key, password:formValues.password}
    
    //const navigate = useNavigate();

    const {authDispatch, authState:{auth:{loading, data:{error, message, response}}}} = useContext(GlobalContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        update(payload)(authDispatch)
        setFormValues(initialValues)
    }

    useEffect(() => {
        if (response) {
            //navigate("/dashboard")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[response])

    const validate = (values) => {
        const error = {password:false}
        if (values.password.length === 0) {
            error.password = true
        } 
        if (values.password !== values.password_confirm){
            error.password = true
        }
        return error
    }

    const validateForm = validate(formValues).password


    return {formValues, handleChange, loading, error, message, validateForm, handleSubmit}
}

export default useForm