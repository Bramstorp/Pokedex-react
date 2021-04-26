import React, { useEffect, useState } from 'react';
import { Pokemon } from '../components/Pokemon';
import { getPokemon, getAllPokemon } from '../services/pokemon';

import "../App.css"

export const PokemonsContainer = () => {
    const [pokemon, setPokemon] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon('https://pokeapi.co/api/v2/pokemon')
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        await loadPokemon(response.results);
        setLoading(false);
      }
      fetchData();
    }, [])
  
    const next = async () => {
      setLoading(true);
      let data = await getAllPokemon(nextUrl);
      await loadPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
    }
  
    const prev = async () => {
      if (!prevUrl) return;
      setLoading(true);
      let data = await getAllPokemon(prevUrl);
      await loadPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
    }
  
    const loadPokemon = async (data) => {
      let pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
      }))
      setPokemon(pokemonData);
    }

    return (
      <div>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <>
            <div className="grid-container">
              {pokemon.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        )}
      </div>
    );
}