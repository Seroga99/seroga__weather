    import {combineReducers} from '../../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
    import value from './inputReducer';
    import weather from './weatherReducer';

    const rootReducer = combineReducers({
        value,
        weather,
    })

    export default rootReducer;