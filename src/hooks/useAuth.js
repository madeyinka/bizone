import { useContext } from 'react'
import { GlobalContext } from '../contexts/Provider'

const useAuth = () => {
    return useContext(GlobalContext)
}

export default useAuth