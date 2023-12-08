import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"



const MoviesList = ({data}) => {
    return (
			<div>
				<Grid
					container
					spacing={3}
					columns={{ xs: 1, sm: 2, md: 3, lg: 3 }}
					style={{ marginTop: "10px" }}>
					{data &&
						data.map((movie, index) => (
							<Grid
								item
								key={index} height={800}>
								<Card>
									<CardActionArea>
										<CardMedia>
											<img
												src={movie.Poster}
												alt={movie.Title}
											/>
										</CardMedia>
										<CardContent>
											<h2>{movie.Title}</h2>
											<p>Year: {movie.Year}</p>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button variant='contained'>
                                            <a href={`https://www.imdb.com/title/${movie.imdbID}`} style={{textDecoration:'none',color:'white'}} target='_blank'>
												Check Imdb
											</a>
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
				</Grid>
			</div>
		)
}

export default MoviesList
