import React from "react";
import PropTypes from "prop-types";

export const SearchCharacters = ({ filteredCharacter, handleFilterChange }) => {
  return (
    <div className="cheese__searcher">
      <form>
        <input
          type="search"
          placeholder="Busca tu personaje favorito entre..."
          value={filteredCharacter}
          onChange={handleFilterChange}
        />
      </form>
    </div>
  );
};
SearchCharacters.propTypes = {
  filteredCharacter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
