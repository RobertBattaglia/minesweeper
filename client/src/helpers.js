export const createBoard = n => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push({
        flipped: 0,
        val: 0,
        id: i * n + j + 1
      });
    }
  }
  const bombs = placeBombs(board, 10);
  console.log(bombs);
  return board;
};

export const getRowAndCol = id => {
  const row = !(id % 10) ? id / 10 - 1 : Math.floor(id / 10);
  const col = id % 10 === 0 ? 9 : (id % 10) - 1;
  return [row, col];
};

const placeBombs = (board, length) => {
  const ids = [];
  const bombs = [];
  for (let i = 1; i <= 100; i++) {
    ids.push(i);
  }
  for (let i = 0; i < length; i++) {
    const index = randomIndex(ids.length);
    const id = ids[index];
    const [row, col] = getRowAndCol(id);
    board[row][col].val = 'B';
    bombs.push(ids.splice(index, 1)[0]);
  }
  return bombs;
};

// const

const randomIndex = num => {
  return Math.floor(Math.random() * num);
};
