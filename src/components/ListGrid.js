import React, { useEffect, useState } from "react";
import { getCharacters } from "../API";
import { ItemGrid } from "./ItemGrid";
import { SearchCharacters } from "./SearchCharacters";

export const ListGrid = () => {
  const [state, setState] = useState({
    isLoading: true,
    characters: [],
    filteredCharacter: "",
    showGrid: false,
  });
  useEffect(() => {
    getCharacters().then((data) => {
      setState({
        isLoading: false,
        characters: data,
        filteredCharacter: "",
        showGrid: false,
      });
    });
  }, []);
  const { isLoading, characters, filteredCharacter, showGrid } = state;
  const handleFilterChange = (event) => {
    setState({
      ...state,
      filteredCharacter: event.target.value,
      showGrid: true,
    });
  };
  const resultFilteredCharacters = characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(filteredCharacter.toLowerCase());
  });

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <h1 className="list-grid-title">Rick &amp; Morty</h1>
      <div className="grid-container">
        <SearchCharacters
          handleFilterChange={handleFilterChange}
          filteredCharacter={filteredCharacter}
        />
        {showGrid &&
          resultFilteredCharacters.map((character) => {
            return <ItemGrid key={character.id} data={character} />;
          })}
      </div>
    </div>
  );
};
