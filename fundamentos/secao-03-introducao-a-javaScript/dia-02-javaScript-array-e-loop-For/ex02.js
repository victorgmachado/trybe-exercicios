let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let i = 0 ; i <= numbers.length ; i = i + 1 ) {
    if ( i < numbers.length){
        soma += numbers[i];
   
    }
}
console.log('A soma dos números da array é:', soma);
    