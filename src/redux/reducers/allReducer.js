// since we cannot pass both the reducer at once at the store, so in this file we will combine both the reducer
import counterReducer from './counterReducer'
import switchReducer from './switchReducer'


import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter: counterReducer,
    switch: switchReducer
})
export default allReducer;