import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './reducer'
import authMiddleware from './middleware/auth'

const createStore = () => {
    return configureStore({
        reducer,
        middleware: [
      ...getDefaultMiddleware(),authMiddleware]
    })
}


export default createStore