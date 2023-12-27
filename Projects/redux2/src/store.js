import { createStore } from "redux";
import { combineReducers } from "redux";



function counterReducer (state=0,action)
{
    switch (action.type)
    {
        case "INCR":
            return state + 1 ;
        case "Decr":
            return state- 1
        
        default: return state;
    }
}
function authReducer (state= false, action)
{
    switch (action.type)
    {
        case "LOG_IN": return true;
        case "Log_out": return false;
        default: return state;
    }
}
const rootReducer= combineReducers({counterReducer,authReducer})
const store = createStore(rootReducer);

export default store;