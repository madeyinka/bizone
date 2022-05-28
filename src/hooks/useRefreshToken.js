import axios from "../helpers/axios";
import useAuth from './useAuth'

const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        })
        //console.log('response:', JSON.stringify(response));
        setAuth(prev => {
            // console.log(JSON.stringify(prev));
            // console.log(response?.data);
            return { ...prev, payload: response.data.payload, accessToken:response.data.accessToken }
        })
        return response.data.accessToken;
    }
    return refresh
}

export default useRefreshToken