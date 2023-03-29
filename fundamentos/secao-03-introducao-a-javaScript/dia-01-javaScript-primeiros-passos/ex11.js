let salarioBruto = 3000;

if (salarioBruto < 1556.95) {
  inss = (8 / 100) * salarioBruto
  salarioAbatido = salarioBruto - inss
  console.log('com o desconto do inss o salário fica em', salarioAbatido);
}
else if (salarioBruto <= 2594.92) {
  inss = (9 / 100) * salarioBruto
  salarioAbatido = salarioBruto - inss
  console.log('com o desconto do inss o salário fica em', salarioAbatido);
    if (salarioAbatido >= 1903,99) {
      IR = (7.5 / 100) * salarioAbatido
      salarioFinal = (salarioBruto - IR) - 142.80;
      console.log('com o desconto dos impostos o salário fica em', salarioFinal);
    }
  
}
else if (salarioBruto < 5189,82) {
  inss = (11 / 100) * salarioBruto
  salarioAbatido = salarioBruto - inss
  console.log('com o desconto do inss o salário fica em', salarioAbatido);
    if (salarioAbatido < 2826.66) {
      IR = inss - 142.80;
      salarioFinal = (salarioAbatido - IR);
      console.log('com o desconto dos impostos o salário fica em', salarioFinal);
    }
    else if (salarioAbatido < 3751.06) {
      IR = (22,5 / 100) * salarioAbatido
      salarioFinal = (salarioAbatido - IR) - 354,80;
      console.log('com o desconto dos impostos o salário fica em', salarioFinal);

    }
    else if (salarioAbatido < 4664.68) {
      IR = (27.5 / 100) * salarioAbatido
      salarioFinal = (salarioAbatido - IR) - 636.13;
      console.log('com o desconto dos impostos o salário fica em', salarioFinal);

    }
  
}


else {
  console.log('alto')
}