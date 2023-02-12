import React from 'react'
import CardPokemon from '../CardPokemon/CardPokemon'

const PokemonList = ({results,type}) => {
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
        {results.map(pokemon=>
            <CardPokemon url={pokemon.url} key={pokemon.name} type={type}/>
        )}
    </div>
  )
}

export default PokemonList