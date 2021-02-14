import React, { useEffect, useState } from "react";

import { /* getCharacters, */ getCharactersByPage } from "../API";
import { UserContext } from "./Context/userContext";
import { ItemGrid } from "./ItemGrid";
import { SearchCharacters } from "./SearchCharacters";
import { SelectPage } from "./SelectPage";

export const ListGrid = () => {
  const [state, setState] = useState({
    isLoading: true,
    characters: [],
    filteredCharacter: "",
    showGrid: false,
    page: 1,
    data: {},
  });
  const {
    isLoading,
    characters,
    filteredCharacter,
    showGrid,
    data,
    page,
  } = state;

  useEffect(() => {
    getCharactersByPage(page).then((data) => {
      setState({
        isLoading: false,
        characters: data.results,
        filteredCharacter: "",
        showGrid: true,
        data: data,
        page: page,
      });
    });
  }, [page]);

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
        <UserContext.Provider value={{ state, setState }}>
          <SelectPage data={data} />
        </UserContext.Provider>
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
