import React from "react";
import ColorInput from "./ColorInput";

const Form = ({ rows, setRows, columns, setColumns, colors, setColors, fillColor, setFillColor, handleSubmit, handleReset, selectedCoords }) => {
  const handleRowsChange = (e) => {
    setRows(e.target.value);
  };
  const handleColumnsChange = (e) => {
    setColumns(e.target.value);
  };
  const handleColorChange = (color, event, index) => {
    const newColors = [...colors];
    newColors[index] = color.hex;
    setColors(newColors);
  };

  const handleFillColorChange = (color) => {
    setFillColor(color);
  };

  return (
    <div>
      <h1>Floodfill algorith</h1>
      <form>
        <label>
          Number of rows:
          <input type="number" name="rows" value={rows} onChange={handleRowsChange} />
        </label>
        <br />
        <label>
          Number of columns:
          <input type="number" name="columns" value={columns} onChange={handleColumnsChange} />
        </label>
        <br />
        <label>
          Existing grid colors:
          <div className="color-input-container">
            {colors.map((value, index) => (
              <ColorInput value={value} onChange={handleColorChange} index={index} key={index} />
            ))}
          </div>
        </label>
        <br />
        <label>
          Fill color:
          <div className="color-input-container">
            <ColorInput value={fillColor} onChange={handleFillColorChange} />
          </div>
        </label>
        <label>
          Selected Coordinates(click cell to select):
          <br />
          <input type="text" name="coords" value={`${selectedCoords?.[0]},${selectedCoords?.[1]}`} disabled onChange={() => {}} />
        </label>
        <br />
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Form;
