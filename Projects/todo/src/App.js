import './App.css';
import { useState } from 'react'
function App ()
{
  let task = '';
  const taskStyle = { color: 'red', display: 'flex', justifyContent: 'space-between' }
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(false)
  const addToList = () =>
  {
     if (task.trim() === '') {
				setError(true)
     } else
     {
        console.log(task)
				setTasks([task, ...tasks])
				console.log(tasks)
      }
   
  }
  const makeValue = (val) =>
  {
          task = val
  }
  const remove = (index) =>
  {
     tasks.splice(index, 1);
     setTasks([...tasks])
  }
  return (
		<div className='App'>
			<div className='todo-header'>
				<input
					type='text'
					placeholder='enter a text'
					onChange={(e) => makeValue(e.target.value)}
				/>
				<button onClick={addToList}>Search</button>
			</div>
			<div className='todoList'>
				{error && <p>Please do not enter empty task</p>}
				{tasks.map((val, index) => (
					<div
						className='task'
            key={index}
            style={taskStyle}>
						<p>{val}</p>
						<button onClick={() => remove(index)}>X</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default App;
