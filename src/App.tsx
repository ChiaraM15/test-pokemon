import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "./intefaces";
import "./index.css";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<number>(1);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  // 🔁 Ogni volta che cambia currentPokemon, fai il fetch dei dati
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`
        );
        setPokemon(res.data);
      } catch (err) {
        console.error("Errore nel caricamento del Pokémon:", err);
        setPokemon(null);
      }
    };

    fetchPokemon();
  }, [currentPokemon]);

  const increment = () => setCurrentPokemon((prev) => Math.min(prev + 1, 1017));
  const decrement = () => setCurrentPokemon((prev) => Math.max(prev - 1, 1));
  const goToFirst = () => setCurrentPokemon(1);
  const goToLast = () => setCurrentPokemon(1017);

  return (
    <div>
      <h1>Pokémon n. {currentPokemon}</h1>

      {pokemon ? <p>Nome: {pokemon.name}</p> : <p>Caricamento in corso...</p>}

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
