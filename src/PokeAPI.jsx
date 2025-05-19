import React, { useState, useEffect } from "react";
import axios from "axios";
export default function PokeAPI() {
  const [name, setname] = useState("");
  const [Find, setFind] = useState("");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");

useEffect(() => {
    async function getData() {
      let res = await axios.get(
        ` https://pokeapi.co/api/v2/pokemon/bulbasaur${currentPokemon}`
      );
      console.log(res);
      setImg(res.data.sprites.front_default);
      setType(res.data.types[0].type.name);
      setName(res.data.name);
 
    }

    getData();
  }, [Find]);

  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name !== "") setFind(name);
    setname("");
  };

  return (
    <>
      <div className="back">
        <div className="card">
          <img src={`${Img}`} alt="" />
          <div className="name">{Find.toUpperCase()}</div>

          <div className="type">{Type}</div>

          <input type="text" onChange={Typename} value={name} />

          <button onClick={Search}>Search</button>
        </div>
      </div>
    </>
  );
}