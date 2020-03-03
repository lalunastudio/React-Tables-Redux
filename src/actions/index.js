export const initTable = (rows, uniqueKey) => ({
  type: 'INIT_TABLE',
  rows,
  uniqueKey,
});
export const toggleRow = id => ({
  type: 'TOGGLE_ROW',
  id,
});
export const toggleAll = () => ({
  type: 'TOGGLE_ALL',
});
