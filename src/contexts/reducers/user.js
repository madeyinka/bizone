import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "../../constants/actionTypes"

const userReducer = (state, {payload, type}) => {
    switch(type){
        case USER_LOADING:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading:true
                }
            }
        case USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading:false,
                    data:payload
                }
            }
        case USER_ERROR: 
            return {
                ...state,
                user: {
                    ...state,
                    loading:false,
                    error:payload
                }
            }
        default: 
            return state
    }
}

export default userReducer