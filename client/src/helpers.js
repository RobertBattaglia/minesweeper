export const getRowAndCol = id => {
  const row = !(id % 10) ? id / 10 - 1 : Math.floor(id / 10);
  const col = id % 10 === 0 ? 9 : (id % 10) - 1;
  return [row, col];
};
