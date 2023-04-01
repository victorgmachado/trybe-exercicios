let array = ['java', 'javascript', 'python', 'html', 'css', 'jorge'];
let menorPalavra = ""
let maiorPalavra = ""
let menor = 999
let maior = 0
for (let i = 0; i < array.length; i++ ) {
    if (array[i].length < menor){
        menor = array[i].length
        menorPalavra = array[i];
    }
}
for (let i = 0; i < array.length; i++ ) {
    if (array[i].length > maior){
        maior = array[i].length
        maiorPalavra = array[i];
    }
}
console.log(menorPalavra, maiorPalavra)

