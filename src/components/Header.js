import React from "react";
import logo from "../images/logorick.png";

export const Header = () => {
  const logotitulo = logo;
  return (
    <div>
      <img className="img--logo" src={logotitulo} alt="logo Rick y Morty" />
    </div>
  );
};
