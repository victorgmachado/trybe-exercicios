let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let arit = 0

for (let i = 0 ; i <= numbers.length ; i = i + 1 ) {
    
    if ( i < numbers.length){
        soma += numbers[i];
    }
}
arit = soma/ numbers.length
console.log('O resultado da média aritimética é :', arit);