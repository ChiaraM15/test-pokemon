<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 480a8110da8bc43659b047d5c38309046921a03f
