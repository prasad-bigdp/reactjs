import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList'
import TextField from '@mui/material/TextField';
const Movies = () =>
{
    const [searchTerm, setSearchTerm] = useState('')
    const [moviesData, setMoviesData] = useState([])
    useEffect(() =>
    {
        let API_key='fe360482'
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_key}`)
            .then((response) => response.json())
        .then((data)=>setMoviesData(data.Search))
    },[searchTerm])
  return (
      <div>
          <header style={{textAlign:'center'}}>
              <TextField id="outlined-basic" label="Enter a movie" variant="outlined" onChange={(e)=>setSearchTerm(e.target.value)} />
          </header>
          <MoviesList data={moviesData} />
      <MoviesList />
    </div>
  )
}

export default Movies
