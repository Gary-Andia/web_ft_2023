// 1- Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo){
    if (numberOne > numberTwo){
        console.log(numberOne);
        return numberOne;
    } if (numberOne < numberTwo){
    console.log(numberTwo);
    return numberTwo;
   }
   else {
    console.log(null)  
    return null ;
   }
}
sum(2,1)

