let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

function checkIntegerPositive(valor) {
    if (valor >= 0) {
        return true;
    }
}

function checkItsATriangle(lado1, lado2, lado3) {
    if (lado1 === 0 || lado2 === 0 || lado3 ===0) {
      return false;  
    }
    
   if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        return false;
   }
   
   return true
} 

function checkWitchTriangle(lado1, lado2, lado3) {
    if ( lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        return 'escaleno';
    }

    if (!( lado1 === lado2 || lado1 === lado3 || lado2 === lado3)){
        return 'isoceles'
    }

}




