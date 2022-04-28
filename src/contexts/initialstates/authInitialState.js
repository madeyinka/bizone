const authInitialState =  {
    auth: {
        loading:false,
        data:{error:null, message:"", response:{}},
        error:null
    },
    user: {
        loading:false,
        data:{}
    }
}

export default authInitialState