import { useEffect,useState } from 'react';
import axios from 'axios'
import styled from './App.module.css'
import { Grid, GridItem } from "@chakra-ui/react"
function App ()
{
  const [todos,setTodos] =useState([])
  useEffect(() =>
  { 
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res) =>
      {
      setTodos(res.data)
    })
  },
  [])
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>

	  
			{todos &&
        todos.map((todo, index) => (
          
					<GridItem w="100%" h='100'
						key={index} bg={todo.completed?'green':'red'}>
						<h2>{todo.title}</h2>
			
					</GridItem>
				))}
     
      </Grid>
	)
}

export default App;
