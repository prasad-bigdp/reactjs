import { createStore } from 'redux'

function todoReducer (state = [], action)
{
    switch (action.type)
    {//{type:"ADD",payload:{id:2,text:"prasad"}}
        case "ADD": console.log("reducer started")
            return [
                ...state, {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ];
      
        case "DELETE": console.log("reducer delete started")
            return state.filter((val) => val.id != action.payload.id)
        case "TOGGLE":return state.map(todo=>(todo.id===action.payload.id)?{...todo,complete:!todo.completed}:todo)
        default: return state;
    }
}
const store = createStore(todoReducer)
export default store;