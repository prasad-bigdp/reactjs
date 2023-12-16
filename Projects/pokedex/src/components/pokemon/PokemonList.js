import React, {useState,useEffect } from "react";
import PokemonCard from "./PokemonCard";
import LoadingSpinner from "./loading.gif";
const PokemonList = ()=>{
 
  const [pokemon, setPokemon] = useState(null)
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then((res) => res.json())
      .then((data) =>
    {
      setPokemon(data["results"]);
    })
  }, []);
  return (
		<>
			{pokemon ? (
				<div className='row'>
					{pokemon.map((pokemon) => (
						<PokemonCard
							name={pokemon.name}
							url={pokemon.url}
							key={pokemon.name}
						/>
					))}
				</div>
			) : (
				<img
					alt='loading...'
					src={LoadingSpinner}
					style={{ width: "5em", height: "5em" }}
					className='card-img-top rounded mx-auto d-block mt-2'
				/>
			)}
		</>
	)
}
export default PokemonList