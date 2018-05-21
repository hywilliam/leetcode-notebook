/**
 * @param {string} moves
 * @return {boolean}
 * @desc UD RL要绝对匹配
 */
var judgeCircle = function (moves) {
  const moveRouteMap = moves.split('').reduce((map, move) => {
    if (map[move]) {
      map[move]++;
    } else {
      map[move] = 1;
    }
    return map;
  }, {});
  return moveRouteMap['U'] === moveRouteMap['D'] && moveRouteMap['L'] === moveRouteMap['R'];
};

/**
 * @desc x,y轴归零
 * @param moves 
 */
var judgeCircle2 = function (moves) {
  let [x, y] = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        y++;
        break;
      case 'D':
        y--;
        break;
      case 'L':
        x--;
        break;
      case 'R':
        x++;
        break;
      default:
        return new Error('input error');
    }
  }
  return x === 0 && y === 0;
};


judgeCircle("LDRRLRUULR");