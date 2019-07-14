// Board
export const flipSquare = id => ({
  type: 'FLIP_SQUARE',
  id: id
});

// Status
export const startGame = () => ({
  type: 'START'
});
export const endGame = () => ({
  type: 'END'
});
