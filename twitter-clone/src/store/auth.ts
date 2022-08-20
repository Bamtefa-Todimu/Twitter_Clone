import {createSlice} from '@reduxjs/toolkit'


interface payloadType {
    email:string,
    password:string,
}


interface actionType {
    type:string | null | undefined,
    payload: payloadType
}

interface userType {
    isLoggedIn:Boolean,
    lastLoggedIn: string | null ,
    isLoading:Boolean
}



const slice = createSlice({
    name:"auth",
    initialState:{
        isLoggedIn:false,
        lastLoggedIn: null,
        isLoading:false

    },
    reducers:{
        userLoginRequested:(user:userType,action:actionType) => {
             user.isLoading = true
        },

        userLoginSuccessfull : (user:userType,action:actionType) => {
            user.isLoading = true
            user.isLoggedIn = true
            user.lastLoggedIn = Date.now().toString()
        }
    }
    

})