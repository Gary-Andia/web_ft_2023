// 1- Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let num = 0;
  for (const number of numbers) {
    num += number;
  }
  let average = num / numbers.length;
  console.log(average);
}

average(numbers);
