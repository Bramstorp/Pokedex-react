import React from "react";
import { pokemonTypeColors } from "../theme/pokemon-type"
import './card.css';


export const Pokemon = ({ pokemon }) => {
  console.log(pokemon)
  
  return (
    <div className="Card">
      <div className="Card__name">{pokemon.name}</div>
      <div className="Card__meta">
        <span>{pokemon.stats[0].stat.name} - {pokemon.stats[0].base_stat}</span>
        <span>{pokemon.stats[1].stat.name} - {pokemon.stats[1].base_stat}</span>
      </div>
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card__types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="Card__type"
              style={{ backgroundColor: pokemonTypeColors[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
