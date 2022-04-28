import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, RESET_ERROR, RESET_LOADING, RESET_SUCCESS, UPDATE_ERROR, UPDATE_LOADING, UPDATE_SUCCESS } from "../../constants/actionTypes"

const authReducer = (state, {payload, type})=>{
    switch(type){
        case LOGIN_LOADING:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading:true
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    data: payload
                },
                user: {
                    ...state.user,
                    laoding:false,
                    data:{payload, ...state.user.data}
                }
            }
        case LOGIN_ERROR:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    err: payload
                }
            }
        case RESET_LOADING:
        return {
            ...state,
            auth: {
                ...state.auth,
                loading:true
            }
        }
        case RESET_SUCCESS:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    data: payload
                }
            }
        case RESET_ERROR:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: payload
                }
            }
        case UPDATE_LOADING:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading:true
                }
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    data: payload
                }
            }
        case UPDATE_ERROR:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: payload
                }
            }
        default:
            return state
    }
}

export default authReducer