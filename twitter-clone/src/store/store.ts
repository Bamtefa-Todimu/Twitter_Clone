import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './reducer'

export default () => {
    return configureStore({
        reducer,
        middleware: [
      ...getDefaultMiddleware()]
    })
}