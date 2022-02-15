
// You should implement your task here.

module.exports = function towelSort (matrix) {
  console.log(matrix)
  if(typeof(matrix) != typeof([])){return []}
  let answer = []
  for (let i = 0; i < matrix.length; i++){
    if ( i % 2 == 0){
      matrix[i].forEach(element => {
        answer.push(element)
      });
    } else {
      for (let j = matrix[i].length - 1; j != -1; j--){
        answer.push(matrix[i][j])
      }
    }
  }
  console.log(answer)
  return answer;
}
