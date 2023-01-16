// 1- Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longName = "";
  for (const avenger of avengers) {
    if (avenger.length > longName.length) {
      longName = avenger;
    }
  }
  console.log(longName);
  return longName;
}

findLongestWord(avengers);
