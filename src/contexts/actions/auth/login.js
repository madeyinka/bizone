import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const login = (postData) => (dispatch) => {
    dispatch({
        type: LOGIN_LOADING
    })
    axiosInstance().post('/auth/login', postData)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: LOGIN_ERROR,
            payload: err
        })
    })
}