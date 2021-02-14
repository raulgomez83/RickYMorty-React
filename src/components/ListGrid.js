import React, { useEffect, useState } from "react";
import { getCharacters } from "../API";
import { ItemGrid } from "./ItemGrid";

export const ListGrid = () => {
  const [state, setState] = useState({
    isLoading: true,
    characters: [],
  });
  useEffect(() => {
    getCharacters().then((data) => {
      setState({ isLoading: false, characters: data });
    });
  }, []);
  const { isLoading, characters } = state;

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <h1 className="list-grid-title">Rick &amp; Morty</h1>
      <div className="grid-container">
        {characters.map((character) => {
          return <ItemGrid key={character.id} data={character} />;
        })}
      </div>
    </div>
  );
};
