import { useState, useEffect } from "react";
import { Pokemon } from "./intefaces";
import "./index.css";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<number>(1);
  const [pokemon, setPokemon] = useState<Pokemon>({
    abilities: [],
    base_experience: 64,
    cries: { latest: "", legacy: "" },
    forms: { name: "", url: "" },
    game_indices: [],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: "",
    moves: [],
    name: "bulbasaur",
    order: 1,
    past_abilities: "",
    past_types: [],
    species: { name: "", url: "" },
    stats: [],
    types: [],
    weight: 69,
  });

  

 const increment = () => setCurrentPokemon((prev) => Math.min(prev + 1, 1017));
  const decrement = () => setCurrentPokemon((prev) => Math.max(prev - 1, 1));
  const goToFirst = () => setCurrentPokemon(1);
  const goToLast = () => setCurrentPokemon(1017);

  return (
    <div>
      <h1>Pokémon n. {currentPokemon}</h1>
      <p>Nome: {pokemon.name}</p>
       
      <div style={{ marginTop: "20px" }}>
        <button onClick={goToFirst}>Primo</button>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={goToLast}>Ultimo</button>
      </div>
    </div>
  );
}


export default App;
