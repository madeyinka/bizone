import { RESET_ERROR, RESET_LOADING, RESET_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const reset = (postData) => (dispatch) => {
    dispatch({
        type: RESET_LOADING
    })
    axiosInstance().post('/auth/reset', postData)
    .then(res => {
        dispatch({
            type: RESET_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: RESET_ERROR,
            payload: err.response.data
        })
    })
}