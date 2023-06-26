import React from "react";
import Cell from "./Cell";

const Grid = ({ loading, grid, setCoords }) => {
  const renderCell = (i, j) => {
    return <Cell loading={loading }color={grid[i][j]} coords={[i, j]} setCoords={setCoords} key={`key${i}-${j}`} />;
  };

  const drawGrid = () => {
    try {
      let drawnGrid = [];
      grid.forEach((row, rowIndex) => {
        let children = [];
        row.forEach((column, columnIndex) => {
          children.push(renderCell(rowIndex, columnIndex));
        });
        drawnGrid.push(
          <div className="row" key={rowIndex}>
            {children}
          </div>
        );
      });

      return drawnGrid;
    } catch (error) {
      console.log("🚀TCL ~ drawGrid ~ error:", error);
    }
  };

  return <div>{drawGrid()}</div>;
};

export default Grid;
