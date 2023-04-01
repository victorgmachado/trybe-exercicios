function saudacao(num){
    if (num >= 5 && num < 12) {
        return "Bom dia"
    }
    else if (num >= 12 && num < 18) {
        return "Boa tarde"
    }
    else if (num >= 18 && num <= 23) {
        return "Boa noite"
    }
    else if (num >= 0 && num < 5) {
        return "Boa madrugada"
    }
      return "Valor não identificado!"

    
}
const response = saudacao(3)
console.log("Victor " +response)    
