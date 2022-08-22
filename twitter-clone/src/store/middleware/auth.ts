import {
  AsyncThunkAction,
  Dispatch,
  Middleware,
  ThunkDispatch,
  MiddlewareAPI,
  AnyAction,
  //   PayloadAction,
} from '@reduxjs/toolkit'
import { actionType } from "../auth"



const auth:Middleware = (dispatch:MiddlewareAPI) => (next:Dispatch) => async (action:AnyAction) => {
    console.log(action)
    return next(action)
}

export default auth