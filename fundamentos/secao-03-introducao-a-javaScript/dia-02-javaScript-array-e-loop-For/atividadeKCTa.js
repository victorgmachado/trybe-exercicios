let nota1 = 6;
let nota2 = 10;
let nota3 = 1;

let soma = nota1 + nota2 + nota3;
let divisao = (soma*100) / 60;

if (divisao >= 54) {
    console.log("Com ", divisao, "do pontos, este aluino é nota A!")
}
else if (divisao >= 48) {
    console.log("Com ", divisao, "dos pontos, este aluino é nota B!")
}
else if (divisao >= 42) {
    console.log("Com ", divisao, "dos pontos, este aluino é nota C!")
}
else if (divisao >= 36) {
    console.log("Com ", divisao, "dos pontos, este aluino é nota D!")
}
else if (divisao >= 30) {
    console.log("Com ", divisao, "dos pontos, este aluino é nota E!")
}
else {
    console.log("Com ", divisao, "dos pontos, este aluino é nota F!")
}
