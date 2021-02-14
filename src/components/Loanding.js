import React from "react";
import PropTypes from "prop-types";

export const Loading = ({ message }) => {
  return <div className="loader">{message || "Cargando2"}</div>;
};

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
