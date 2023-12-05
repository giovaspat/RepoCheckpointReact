import { useState, useEffect } from "react";

export function Pokemon () {
  const [pokemon, setPokemon] = useState ("")
  const [pokemonData, setPokemonData] = useState(null)

  useEffect (() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((json) => {
      setPokemonData(json)
      console.log(json)
    })
    .catch((error)=> console.error(error))

  }, [pokemon])

  function showDatas () {
    setPokemonData(pokemonData)
  }

  return (
    <div>
      <input
        type="text"
        value={pokemon}
        onChange={(event) => {
          setPokemon(event.target.value);
        }}
      />
      {pokemonData && (
        <div>
          <button onClick={showDatas}>Click here</button>
          <h2>{pokemonData.name}</h2>
          <h2>{pokemonData.abilities}</h2>
          <h2>{pokemonData.base_experience}</h2>
        </div>
      )}
    </div>
  );





}