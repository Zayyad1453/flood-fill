var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const { grid, startingX, startingY, fillColor } = req.query;
  const returnedGrid = parseRequest(grid, startingX, startingY, fillColor);
  res.send(returnedGrid);
});

const parseRequest = (grid, startingX, startingY, fillColor) => {
  try {
    const gridArray = JSON.parse(grid);
    return floodfill(gridArray, startingX, startingY, fillColor);
  } catch (error) {
    return error;
  }
};
const isOutOfBounds = (grid, x, y) => {
  const numRows = grid.length;
  const numColumns = grid[0].length;
  return x < 0 || x >= numColumns || y < 0 || y >= numRows;
};
const isSameColor = (grid, x, y, startingColor) => {
  return grid?.[x]?.[y] === startingColor;
};
const floodfill = (grid, startingX, startingY, fillColor) => {
  try {
    const startingColor = grid[startingX][startingY];
    if (isOutOfBounds(grid, startingX, startingY) || startingColor === fillColor) return grid;
    

    grid[startingX][startingY] = fillColor;
    //cells to the left
    isSameColor(grid, startingX - 1, startingY - 1, startingColor) && floodfill(grid, startingX - 1, startingY - 1, fillColor);
    isSameColor(grid, startingX - 1, startingY, startingColor) && floodfill(grid, startingX - 1, startingY, fillColor);
    isSameColor(grid, startingX - 1, startingY + 1, startingColor) && floodfill(grid, startingX - 1, startingY + 1, fillColor);

    //cells above and below
    isSameColor(grid, startingX, startingY - 1, startingColor) && floodfill(grid, startingX, startingY - 1, fillColor);
    isSameColor(grid, startingX, startingY + 1, startingColor) && floodfill(grid, startingX, startingY + 1, fillColor);

    //cells to the right
    floodfill(grid, startingX + 1, startingY - 1, fillColor);
    floodfill(grid, startingX + 1, startingY, fillColor);
    floodfill(grid, startingX + 1, startingY + 1, fillColor);
    return grid;
  } catch (error) {
    return error;
  }
};
module.exports = router;
