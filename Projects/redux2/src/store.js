import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk"
const posts = {
    data: [],
    error:""
}


function counterReducer (state=0,action)
{
    switch (action.type)
    {
        case "INCR":
            return state + 1 ;
        case "DECR":
            return state- 1
        
        default: return state;
    }
}
function fetchReducer (state=posts, action)
{
    switch (action.type) {
			case "Fetch_Fail":
				return {
					...state,
					error: action.payload,
				}
        case "Fetch_Success":
            console.log("reducer called")
				return {
					...state,
					data: action.payload,
				}
			default:
				return state
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
const rootReducer = combineReducers({ counter:counterReducer, auth:authReducer, fetchh:fetchReducer })
const store = createStore(rootReducer,applyMiddleware(thunk))
console.log(store.getState(fetchReducer))
export default store;