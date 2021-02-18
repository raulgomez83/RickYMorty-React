import React from "react";
import { NavLink } from "react-router-dom";

export const ItemGrid = ({ data }) => {
  return (
    <NavLink className="link container container--item" to={`/${data.id}`}>
      <img className="img--item" src={data.image} alt={data.name} />
      <h2>{data.name}</h2>
    </NavLink>
  );
};
