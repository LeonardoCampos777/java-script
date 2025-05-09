//(Classifique uma nota para alunos de acordo com a nota média

//0 - 59: E
// 60 - 69: D
// 70 - 79: C
//80 - 89: B
//90 - 100: A

const marks = [91, 95, 90];

let soma = 0;
function calculateGrade(array) {
  const media = calcularMedia(array);

  if (media < 60) {
    return 'Sua nota foi: "E"';
  } else if (media < 70) {
    return 'Sua nota foi "D"';
  } else if (media < 80) {
    return 'Sua nota foi "C"';
  } else if (media < 90) {
    return 'Sua nota foi "B"';
  } else if (media > 90) {
    return 'Sua nota foi "A"';
  }
}

function calcularMedia(array) {
  for (const materia of array) {
    soma += materia;
  }
  return soma / array.length;
}

console.log(calculateGrade(marks));
