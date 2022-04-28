import axios from 'axios'
const axiosInstance = (history = null) => {
    const baseURL = process.env.REACT_APP_BACKEND_API
    let headers = {}

    const user = JSON.parse(localStorage.getItem('user'))

    if (user.token) {
        headers.Authorization = `Bearer ${user.token}`
    }

    const axiosInstance = axios.create({
        baseURL:baseURL,
        headers
    })

    axiosInstance.interceptors.response.use(
        (response) =>
        new Promise((resolve, reject) =>{
            resolve(response)
        }),
        (error) => {
            if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            }); 
            }

            // if (error.response.status === 401) {
            //     if (history) {
            //         history("/auth/login")
            //     } else {
            //         window.location = "/auth/login"
            //     }
            // }

            if (error.response.status === 403) {
                localStorage.removeItem('user')
                if (history) {
                    history("/auth/login")
                } else {
                    window.location = "/auth/login"
                }
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

        }
    )
    return axiosInstance
}

export default axiosInstance
