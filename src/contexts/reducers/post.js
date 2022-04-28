import { ADD_POST_ERROR, ADD_POST_LOADING, ADD_POST_SUCCESS, CLEAR_FORM, POSTS_ERROR, POSTS_LOADING, POSTS_SUCCESS, POST_ERROR, POST_LOADING, POST_SUCCESS } from "../../constants/actionTypes"

const postReducer = (state, {payload, message, type}) => {
    switch(type) {
        case ADD_POST_LOADING: {
            return {
                ...state,
                addPost:{
                    ...state.addPost,
                    loading:true
                }
            }
        }
            
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                addPost:{
                    ...state.addPost,
                    loading:false,
                    data:payload,
                    message:message
                }
            }
        }
            
        case ADD_POST_ERROR: {
            return {
                ...state,
                addPost: {
                    ...state.addPost,
                    loading:false,
                    error:true,
                    message:message
                }
            }
        }
            
        case CLEAR_FORM: {
            return {
                ...state,
                addPost:{
                    ...state.addPost,
                    loading:false,
                    data:null,
                    error:null,
                    message:""
                }
            }
        }
            
        case POSTS_LOADING: {
            return {
                ...state,
                posts:{
                    ...state.posts,
                    loading:true
                }
            }
        }
            
        case POSTS_SUCCESS: {
            return {
                ...state,
                posts:{
                    ...state.posts,
                    loading:false,
                    data:payload,
                    message:message
                }
            }
        }
            
        case POSTS_ERROR: {
            return {
                ...state,
                posts:{
                    ...state.posts,
                    loading:false,
                    message:message,
                    error:true
                }
            }
        }

        case POST_LOADING: {
            return {
                ...state,
                post:{
                    ...state.post,
                    loading:true
                }
            }
        }

        case POST_SUCCESS: {
            return {
                ...state,
                post: {
                    ...state.post,
                    loading:false,
                    data: payload,
                    message:message
                }
            }
        }

        case POST_ERROR: {
            return {
                ...state,
                post: {
                    ...state.post,
                    loading:false,
                    error:payload,
                    message:message
                }
            }
        }
            
        default:
            return state
    }
}

export default postReducer