import './App.css';
import { useState } from 'react'

import ListGroup from "react-bootstrap/ListGroup"

function App ()
{
  const taskStyle = {
    color: 'black',
    width:'150px',
	}
  const [tasks, setTasks] = useState([])
  const [task,setTask] =useState('')
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
 
  const remove = (index) =>
  {
     tasks.splice(index, 1);
     setTasks([...tasks])
  }
  return (
		<div
			className='d-flex flex-column justify-content-center align-items-center'
			style={{ height: "100vh", width: "100vw" }}>
			<div className='todo-header d-flex gap-3'>
				<input
					className='input h-20 border rounded-5 border-success'
					type='text'
					placeholder='enter a text'
					onChange={(e) => {
						setTask(e.target.value)
					}}
				/>
				<button
					className='btn btn-success'
					onClick={addToList}>
					Search
				</button>
			</div>
			<div className='todoList'>
				{error && <p>Please do not enter empty task</p>}
				<ListGroup>
					{tasks.map((val, index) => (
						<ListGroup.Item>
							<div
								className='task d-flex gap-5 m-3 w-50'
								key={index}
								style={taskStyle}>
								<p>{val}</p>

								<button
									className=''
									onClick={() => remove(index)}>
									❌
								</button>
							</div>
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
		</div>
	)
}

export default App;
