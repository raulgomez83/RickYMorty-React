import React, { useContext } from "react";
import { UserContext } from "./Context/userContext";

export const SelectPage = ({ data }) => {
  const { state, setState } = useContext(UserContext);
  const { page } = state;
  const handlePrevPageChange = () => {
    if (page > 1) {
      setState({ ...state, page: page - 1 });
    }
  };
  const handleNextPageChange = () => {
    if (page < 34) {
      setState({ ...state, page: page + 1 });
    }
  };
  return (
    <div className="multi-button">
      <button id="btn" onClick={handlePrevPageChange}>
        &lt;prev
      </button>
      <button id="btn" onClick={handleNextPageChange}>
        next&gt;
      </button>
    </div>
  );
};
