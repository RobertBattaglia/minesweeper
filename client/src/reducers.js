import { createStore, combineReducers } from 'redux';

const initState = {
  board: []
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
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board
});

export const store = createStore(rootReducer);
