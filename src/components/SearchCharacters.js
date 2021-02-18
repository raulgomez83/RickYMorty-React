import React from "react";
import PropTypes from "prop-types";

export const SearchCharacters = ({ filteredCharacter, handleFilterChange }) => {
  return (
    <form>
      <div className="search">
        <input type="checkbox" id="trigger" className="search__checkbox" />
        <label className="search__label-init" htmlFor="trigger"></label>
        <label className="search__label-active" htmlFor="trigger"></label>
        <div className="search__border"></div>
        <input
          className="search__input"
          type="text"
          title="Busca tu personaje "
          placeholder="Busca tu personaje... "
          value={filteredCharacter}
          onChange={handleFilterChange}
          minLength="2"
          maxLength="100"
        />
        <div className="search__close"></div>
      </div>
    </form>
  );
};
SearchCharacters.propTypes = {
  filteredCharacter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
