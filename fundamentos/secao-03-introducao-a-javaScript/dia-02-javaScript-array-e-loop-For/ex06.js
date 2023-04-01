let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0

for (let i = 0; i < numbers.length; i ++) {
    if(numbers[i] % 2 != 0) {
        impar++
        console.log(numbers[i])
    }
}
if (impar==0) {
    console.log("Nenhum valor impar encontrado")
}else{
    console.log(`Quantidade de impares encontrados: ${impar}`)
}


