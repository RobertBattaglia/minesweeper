import { createStore, combineReducers } from 'redux';
import { getRowAndCol } from './helpers';

const initState = {
  board: [],
  status: 0
};

for (let i = 0; i < 10; i++) {
  initState.board.push([]);
  for (let j = 0; j < 10; j++) {
    initState.board[i].push({
      flipped: 0,
      val: 0,
      id: i * 10 + j + 1
    });
  }
}

const board = (state = initState.board, action) => {
  switch (action.type) {
    case 'FLIP_SQUARE':
      const { id } = action;
      const [row, col] = getRowAndCol(id);
      if (state[row][col].flipped) {
        return state;
      }
      const newState = [...state];
      newState[row][col] = { ...state[row][col], flipped: 1 };
      return newState;

    default:
      return state;
  }
};

const status = (state = initState.status, action) => {
  switch (action.type) {
    case 'START':
      return 1;
    case 'END':
      return 0;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board,
  status
});

export const store = createStore(rootReducer);
