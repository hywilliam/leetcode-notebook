/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map((row) => {
      return row.reverse().map(a => a^1);
  });
};