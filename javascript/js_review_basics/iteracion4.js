// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const listaAnimales = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (listaAnimales, text) => {
  for (const item of listaAnimales) {
    if (item == text) return listaAnimales.indexOf(item);
  }
};
console.log(findArrayIndex(listaAnimales, "Salamandra"));
