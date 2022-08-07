// import React from 'react'

const PokemonApi = (name) => {
  return (
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(
                        new Error(`Покемона с имененем ${name} не найдено...`)
                    )
                })
  )
}

export default PokemonApi;
    