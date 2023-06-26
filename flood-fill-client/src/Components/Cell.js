import React from "react";

const Cell = ({ loading, color, coords, setCoords }) => {
  return <div className={`cell ${loading ? "loading" : ""}`} style={{ backgroundColor: color }} onClick={() => !loading && setCoords(coords)}></div>;
};

export default Cell;
