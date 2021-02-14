import React from "react";
import { NavLink } from "react-router-dom";

export const ItemGrid = ({ data }) => {
  return (
    <NavLink to={`/${data.id}`}>
      <img src={data.image} alt={data.name} />
      <p>{data.name}</p>
    </NavLink>
  );
};
