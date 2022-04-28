import { UPDATE_ERROR, UPDATE_LOADING, UPDATE_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const update = (postData) => (dispatch) => {
    dispatch({
        type: UPDATE_LOADING
    })
    axiosInstance().post('/auth/update', postData)
    .then(res => {
        localStorage.token = res.data.response
        dispatch({
            type: UPDATE_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: UPDATE_ERROR,
            payload: err.response.data
        })
    })
}