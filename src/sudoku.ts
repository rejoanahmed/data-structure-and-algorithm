const shuffleArray = (values = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
  const result = [];
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * values.length);
    result[i] = values[randomIndex];
    values.splice(randomIndex, 1);
  }
  return result;
};

const solveSudoku = (grid: number[][]) => {};

const generateSudokuFilled = () => {
  // intialize 9x9 grid
  const grid = Array(9)
    .fill(0)
    .map(() => Array(9).fill(0));
  let randomBox = shuffleArray();
  let cellIndex = 0;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 3; c++) {
      grid[r][c + Math.floor(r / 3) * 3] = randomBox[cellIndex];
      cellIndex++;
      if (cellIndex === 9) {
        cellIndex = 0;
        randomBox = shuffleArray();
      }
    }
  }

  const findEmptyCell = () => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (grid[r][c] === 0) {
          return [r, c];
        }
      }
    }
    return null;
  };

  while (!findEmptyCell()) {
    const [r, c] = findEmptyCell() as [number, number];
  }

  const usedInRow = (x: number, r: number) => {
    for (let c = 0; c < 9; c++) {
      if (grid[r][c] === x) {
        return true;
      }
    }
    return false;
  };

  const usedInColumn = (x: number, c: number) => {
    for (let r = 0; r < 9; r++) {
      if (grid[r][c] === x) {
        return true;
      }
    }
    return false;
  };

  const usedInBox = (x: number, r: number, c: number) => {
    const row = Math.floor(r / 3) * 3;
    const col = Math.floor(c / 3) * 3;
    for (let r = row; r < row + 3; r++) {
      for (let c = col; c < col + 3; c++) {
        if (grid[r][c] === x) {
          return true;
        }
      }
    }
    return false;
  };

  const isSafe = (x: number, r: number, c: number) => {
    return !usedInBox(x, r, c) && !usedInColumn(x, c) && !usedInRow(x, r);
  };

  return grid;
};

console.log(
  generateSudokuFilled()
    .map((row) => row.join(" "))
    .join("\n")
);
