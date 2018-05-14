/**
 * @param {*} J 
 * @param {*} S 
 * @return {number}
 */
var numJewelsInStones1 = function (J, S) {
  const mapS = S.split('').reduce((map, s) => {
    if (map[s]) { map[s]++; } else {
      map[s] = 1;
    }
    return map;
  }, {});
  let num = 0;
  for (let i = 0; i < J.length; i++) {
    num += (mapS[J[i]] || 0);
  }
  return num;
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones2 = function (J, S) {
  const SLen = S.length;
  const JArr = J.split('');
  let num = 0;
  for (let i = 0; i < SLen; i++) {
    if (JArr.find(j => j === S[i]))++num;
  }
  return num;
};