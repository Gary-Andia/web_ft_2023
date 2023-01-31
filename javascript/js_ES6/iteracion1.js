// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.

//1.1 Ejecuta esta función sin pasar ningún parametro
const numSum = (numA = 10, numB = 5) => {
    return numA + numB;
  }; 
  
  console.log(numSum());

//1.2 Ejecuta esta función pasando un solo parametro
const numSum1 = (numA = 10, numB = 5) => {
    return numA + numB;
  };

console.log(numSum1(3));

//1.3 Ejecuta esta función pasando dos parametros
const numSum2 = (numA = 10, numB = 5) => {
    return numA + numB;
  };

console.log(numSum2(4, 16)); 
