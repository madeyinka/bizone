import { useRef, useState, useEffect } from "react"
import useAuth from '../../../hooks/useAuth'
import axios from "../../../helpers/axios";
import { useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = '/auth/login'

const useForm =  () => {

    const {setAuth} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/dashboard";

    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        userRef.current.focus()
    },[])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({email, password}),
                {
                    headers:{'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            //console.log(JSON.stringify(response?.data))
            const payload = response?.data?.response?.payload
            const accessToken = response?.data?.response?.accessToken
            setAuth({payload, accessToken})
            setEmail('')
            setPassword('')
            navigate(from, {replace:true})
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 403) {
                setErrMsg('Contact Administrator')
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid Crendentials')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus()
        }
        
    }

    return {errMsg, userRef, errRef, password, email, setEmail, setPassword, handleSubmit}



























    
    // const initialValues = {email:"", password:""}
    // const [formValues, setFormValues] = useState(initialValues)
    // const [formError, setFormError] = useState(false)


    // let navigate = useNavigate();

    // const {currentUser, setCurrentUser, authDispatch, authState:{auth:{loading, data:{error, message, response}}}} = useContext(GlobalContext)

    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //     setFormValues({...formValues, [name]: value})
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setFormError(error)
    //     login(formValues)(authDispatch)
        
    // }

    // useEffect(() => {
    //     setCurrentUser(response)
    //     localStorage.setItem('user', JSON.stringify(response))
    // }, [response])

    // useEffect(() => {
    //     if (currentUser.isAuthenticated){
    //         navigate('/dashboard')
    //     }
    // }, [currentUser.isAuthenticated])


    // const validateForm = !formValues.email?.length || !formValues.password?.length


   // return {formValues, handleChange, loading, formError, message, validateForm, handleSubmit}
}

export default useForm