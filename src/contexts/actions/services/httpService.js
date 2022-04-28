import { ADD_POST_ERROR, ADD_POST_LOADING, ADD_POST_SUCCESS, CLEAR_FORM, POSTS_ERROR, POSTS_LOADING, POSTS_SUCCESS, POST_ERROR, POST_LOADING, POST_SUCCESS } from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'

export const post = (url, postData) => (dispatch) => {
    dispatch({
        type:ADD_POST_LOADING
    })
    axiosInstance().post(url, postData)
    .then(res => {
        if (!res.data.error) {
            console.log(res.data)
            dispatch({
                type: ADD_POST_SUCCESS,
                payload:res.data.response,
                message:res.data.message
            })
        } else {
            dispatch({
                type: ADD_POST_ERROR,
                message: res.data.message
            })
        }
    })
    .catch(err => {
        dispatch({
            type: ADD_POST_ERROR,
            message:"Connection Error..."
        })
    })
}

export const get = (url) => (dispatch) => {
    dispatch({
        type: POSTS_LOADING
    })
    axiosInstance().get(url)
    .then(res => {
       if (!res.data.error) {
           dispatch({
               type: POSTS_SUCCESS,
               payload: res.data.response,
               message: res.data.message
           })
       } else {
           dispatch({
               type: POSTS_ERROR,
               payload: res.data,
               message: res.message
           })
       }
    })
    .catch(err => {
        dispatch({
            type:POSTS_ERROR,
            message:"Connection Error..."
        })
    })
}

export const getByIdentity = (url) => (dispatch) => {
    dispatch({
        type: POST_LOADING
    })
    axiosInstance()
    .get(url)
    .then(res => {
        if (!res.data.error) {
            dispatch({
                type:POST_SUCCESS,
                payload: res.data.response,
                message: res.data.message
            })
        } else {
            dispatch({
                type: POST_ERROR,
                payload: res.data.response,
                message: res.data.message
            })
        }
    })
}

export const clear = () => (dispatch) => {
    dispatch({
        type:CLEAR_FORM
    })
}