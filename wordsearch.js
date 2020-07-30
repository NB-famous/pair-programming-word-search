const transpose = function(matrix) {
    let line = [];
    let newMatrix = [];
    let length = 0;
    if (!(Array.isArray(matrix[0]))) {
      return matrix
    } else { 
      length = matrix[0].length;
    }
  let col = 0;
  while (col < length) {
    for (let row of matrix) {
      line.push(row[col]);
     }
     newMatrix.push(line);
     line = [];
     col += 1;
    }
    return newMatrix;
  }
  
  const wordSearch = (letters, word) => { 
      const horizontalJoin = letters.map(ls => ls.join(''))
      for (l of horizontalJoin) {
          if (l.includes(word)) {
              return true
          }
      }
  let newMatrix = transpose(letters);
  const verticalJoin = newMatrix.map(vs => vs.join(''))
      for (v of verticalJoin) {
          if (v.includes(word)) {
              return true
          }
      }
      return false;
    }


// console.log(transpose([
//       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//       ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//       ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//     ]))


module.exports = wordSearch

