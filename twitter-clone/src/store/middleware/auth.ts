import {
  Dispatch,
  Middleware,
  MiddlewareAPI,
  AnyAction,
  
} from '@reduxjs/toolkit'



const auth:Middleware = (dispatch:MiddlewareAPI) => (next:Dispatch) => async (action:AnyAction) => {
    console.log(action)
    return next(action)
}

export default auth