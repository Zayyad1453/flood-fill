export const makeFillRequest = async (grid, startingX, startingY, fillColor) => {
  if (!grid || !fillColor) {
    alert("error in params");
    return;
  }
  const url = `/fill?grid=${encodeURIComponent(grid)}&startingX=${startingX}&startingY=${startingY}&fillColor=${encodeURIComponent(fillColor)}`;
  const resp = await fetch(url);
  const jsonData = await resp.json();
  return jsonData;
};
