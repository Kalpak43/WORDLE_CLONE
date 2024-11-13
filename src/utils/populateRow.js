const populateRow = (n) => {
  const row = document.createElement("div");
  row.setAttribute("id", "word-row");
  for (let i = 0; i < n; i++) {
    const cell = document.createElement("input");
    cell.setAttribute("type", "text");
    cell.setAttribute("maxLength", "1");
    cell.setAttribute("disabled", "true");
    row.appendChild(cell);
  }

  return row;
};

export { populateRow };
