import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './reducer'
import authMiddleware from './middleware/auth'

export default () => {
    return configureStore({
        reducer,
        middleware: [
      ...getDefaultMiddleware(),authMiddleware]
    })
}