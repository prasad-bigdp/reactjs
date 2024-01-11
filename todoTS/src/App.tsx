import { useState } from 'react'

import './App.css'
interface Todo
{
  text: string,
  id: number,
  completed:boolean
  }
const App: React.FC=()=> {
  const [ todos, setTodos ] = useState<Todo[]>([])//
  const [newTodo,setNewTodo]= useState<string>('')
  const addtodo = () => {
    if (newTodo.trim() === '') return;
    const newItem: Todo = {
      id:todos.length + 1,
      text: newTodo,
      completed:false
    }
    setTodos([ ...todos, newItem ])
    setNewTodo('')
  }
  
  const deleteTodo = (id:number) => {
    setTodos((prev)=>prev.filter((t)=>t.id!==id))
  }

  return (
    <>
      <div>
        <input type="text" value={ newTodo } onChange={ (e) => setNewTodo(e.target.value) } />
        <button onClick={addtodo}>Add</button>
      </div>
      <table>
        <tr>
          <th>id</th>
          <th>Text</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
    
      { todos && todos.map((t,i) => (
        <tr key={ i }>
          <td>{ t.id }</td>
          <td>{ t.text }</td>
          <td><p>{ t.completed?'completed':'not completed' }</p></td>
          <td><button>Toogle</button>
          <button onClick={()=>deleteTodo(t.id)}>delete</button></td>
        </tr>
      )) }
          </table>
    </>
  )
}

export default App
