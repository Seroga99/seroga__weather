export default function weather (state = {}, action) {
    switch(action.type) {
        case 'WEATHER':
            return action.data
            
        default:
            return state
    }
}   