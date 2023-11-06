import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
// const reduxLogger = require('redux-logger')
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'
// const logger = reduxLogger.createLogger()

//invoke the store and assign it to configureStore
//configurestore manages one or multiple reducers at a time
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
})

export default store