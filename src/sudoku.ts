const randomSudoKuBox = () => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * values.length);
    result[i] = values[randomIndex];
    values.splice(randomIndex, 1);
  }
  return result;
};

const generateSudokuFilled = () => {
  // intialize 9x9 grid
  const grid = Array(9)
    .fill(0)
    .map(() => Array(9).fill(0));
  let randomBox = randomSudoKuBox();
  let cellIndex = 0;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 3; c++) {
      grid[r][c + Math.floor(r / 3) * 3] = randomBox[cellIndex];
      cellIndex++;
      if (cellIndex === 9) {
        cellIndex = 0;
        randomBox = randomSudoKuBox();
      }
    }
  }

  return grid;
};

console.log(
  generateSudokuFilled()
    .map((row) => row.join(" "))
    .join("\n")
);
