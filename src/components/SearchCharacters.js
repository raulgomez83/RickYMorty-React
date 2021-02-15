import React from "react";
import PropTypes from "prop-types";

export const SearchCharacters = ({ filteredCharacter, handleFilterChange }) => {
  return (
    <div className="cheese__searcher">
      <form>
        <input
          type="search"
          placeholder="Busca tu personaje favorito..."
          value={filteredCharacter}
          onChange={handleFilterChange}
          minLength="2"
          maxLength="100"
        />
      </form>
    </div>
  );
};
SearchCharacters.propTypes = {
  filteredCharacter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
