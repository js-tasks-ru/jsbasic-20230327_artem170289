function makeDiagonalRed(table) {
  let getRows = table.rows;
  for (let i = 0; getRows.length > i; i++) {
    let getCells = getRows[i].cells;
    for (let j = 0; getCells.length > j; j++) {
      getCells[i].style.backgroundColor = "red";
    }
  }
}
