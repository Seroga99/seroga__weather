import {combineReducers} from 'redux';
import value from './inputReducer';
import weather from './weatherReducer'

const rootReducer = combineReducers({
    value,
    weather,
})

export default rootReducer;