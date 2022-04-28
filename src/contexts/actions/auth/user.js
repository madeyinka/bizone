import { CURRENT_USER_ERROR, CURRENT_USER_LOADING, CURRENT_USER_SUCCESS, USER_ERROR, USER_LOADING, USER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const auth = () => (dispatch) => {
    dispatch({
        type:CURRENT_USER_LOADING
    })
    axiosInstance()
    .get('/auth/context')
    .then(res => {
        dispatch({
            type: CURRENT_USER_SUCCESS,
            payload: res.data
            
        })
    })
    .catch(err=>{
        dispatch({
            type: CURRENT_USER_ERROR,
            payload: err
        })
    })
}

export const userProfile = (id) => (dispatch) => {
    dispatch({
        type:USER_LOADING
    })
    axiosInstance().get('client/by-identity?identity='+id)
    .then(res => {
        dispatch({
            type:USER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type:USER_ERROR,
            payload:err
        })
    })
}

export const updateUser = (postData) => (dispatch) => {
    dispatch({
        type:USER_LOADING
    })
    axiosInstance().post('client/modify', postData)
    .then(res => {
        dispatch({
            type:USER_SUCCESS,
            payload:res.data
        })
    })
    .catch(err => {
        dispatch({
            type:USER_ERROR,
            payload:err
        })
    })
}

