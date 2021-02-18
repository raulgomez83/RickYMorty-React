import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail } from "../API";
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
    <div>
      <div className="detail-container">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <h3>Género:{character.gender}</h3>
        <h3>Especie: {character.species}</h3>
        <h3>Estado: {character.status}</h3>
        <h3>Origin: {character.origin.name}</h3>
        <h3>Location: {character.location.name}</h3>
      </div>
      <Link to="/">
        <button className="btn">Volver</button>
      </Link>
    </div>
  );
};
