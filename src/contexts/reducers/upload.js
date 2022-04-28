import { UPLOAD_ERROR, UPLOAD_LOADING, UPLOAD_SUCCESS } from "../../constants/actionTypes"

const uploadReducer = (state, {payload, type}) => {
    switch(type){
        case UPLOAD_LOADING:
            return {
                ...state,
                media: {
                    ...state.media,
                    loading:true
                }
            }
        case UPLOAD_SUCCESS:
            return {
                ...state,
                media: {
                    ...state.media,
                    loading:false,
                    data:payload
                }
            }
        case UPLOAD_ERROR:
            return {
                ...state,
                media: {
                    ...state,
                    loading:false,
                    error:payload
                }
            }

        default:
            return state
    }
}

export default uploadReducer