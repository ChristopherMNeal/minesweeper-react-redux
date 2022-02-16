export default (state = {}, action) => {
  const { w, h, mineCount, lost, won, minesPlaced,x,y} = action; //id is coords "X-Y"
  
  switch (action.type) {
  case 'START_GAME': //preset grid size 16x16 mineCount 40
    return Object.assign({}, state, {
        w: w,
        h: h,
        mineCount:mineCount,
        lost: false,
        won: false,
        minesPlaced: false,
        grid: range(h).map((y) => range(w).map((x) => { 
          return {
            id: `cell-${x}-${y}`,
            x, y,
            flagged: false,
            mine: false,
            revealed: false
          };
        }))
    });
  case 'TOGGLE_FLAG':
    let selectedCell = state.grid[y][x];
    selectedCell.flagged = !selectedCell.flagged;
    state.grid[y][x] = selectedCell;    
    return state;
  // case 'GAME_OVER':
  default:
    return state;
  }
};

function range(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

// return {
//   id: `cell-${x}-${y}`,
//   x, y,
//   flagged: false,
//   mine: false,
//   revealed: false

 
  