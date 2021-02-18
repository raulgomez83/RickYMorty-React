import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCharacterDetail } from "../API";
import { Header } from "./Header";
import { Loading } from "./Loanding";

export const ItemDetail = () => {
  let { id } = useParams();

  const [state, setState] = useState({ isLoading: true });
  const { isLoading, character, error } = state;

  useEffect(() => {
    setState({ isLoading: true });
    getCharacterDetail({ idCharacter: id })
      .then((data) => {
        return setState({ character: data, isLoading: false });
      })
      .catch((err) => {
        return setState({ error: err, isLoading: false });
      });
  }, [id]);
  if (error) {
    return <p className="error">{error.message}</p>;
  }
  if (isLoading) {
    return <Loading message={`Cargando video ${id} ...`} />;
  }
  return (
    <div className="container">
      <Header />
      <img
        className="img__item--detail"
        src={character.image}
        alt={character.name}
      />
      <div className="container--detail">
        <h2>{character.name}</h2>
        <h3>
          Género: <b>{character.gender}</b>
        </h3>
        <h3>
          Especie: <b> {character.species}</b>
        </h3>
        <h3>
          Estado: <b> {character.status}</b>
        </h3>
        <h3>
          Origin: <b> {character.origin.name}</b>
        </h3>
        <h3>
          Location: <b> {character.location.name}</b>
        </h3>
      </div>
      <NavLink className="multi-button detail" to="/">
        <button className="detail">Volver</button>
      </NavLink>
    </div>
  );
};
