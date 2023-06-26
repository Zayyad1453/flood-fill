import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import Form from "./Components/Form";
import Grid from "./Components/Grid";
import { makeFillRequest } from "./Utils/useFillRequest";

const initRows = 5;
const initColumns = 5;
const initColors = ["#d9e3f0", "#f47373", "#697689"];
const initFillColor = "#000000";
const initGrid = [
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
  ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
];

function App() {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(initRows);
  const [columns, setColumns] = useState(initColumns);
  const [colors, setColors] = useState(initColors);
  const [fillColor, setFillColor] = useState(initFillColor);
  const [selectedCoords, setSelectedCoords] = useState([]);
  const [builtGrid, setGrid] = useState(initGrid);
  console.log("🚀TCL ~ App ~ builtGrid:", builtGrid);

  const buildGrid = useCallback(() => {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < columns; j++) {
        grid[i][j] = colors[Math.floor(Math.random() * colors.length)];
      }
    }
    console.log("b", grid);
    return grid;
  }, [colors, columns, rows]);

  useEffect(() => {
    console.log("a");
    setGrid(buildGrid());
  }, [buildGrid, rows, columns]);

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      const stringGrid = JSON.stringify(builtGrid);
      let resp = await makeFillRequest(stringGrid, selectedCoords?.[0], selectedCoords?.[1], fillColor);
      console.log("🚀TCL ~ handleSubmit ~ resp:", resp);
      setGrid(resp);
    } catch (error) {
      alert("error encountered when submitting to server");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = (event) => {
    setRows(initRows);
    setColumns(initColumns);
    setColors(initColors);
    buildGrid();
  };
  return (
    <div className="base">
      <Form
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        rows={rows}
        setRows={setRows}
        columns={columns}
        setColumns={setColumns}
        colors={colors}
        setColors={setColors}
        fillColor={fillColor}
        setFillColor={setFillColor}
        selectedCoords={selectedCoords}
      />
      <Grid loading={loading} grid={builtGrid} setCoords={setSelectedCoords} />
    </div>
  );
}

export default App;
