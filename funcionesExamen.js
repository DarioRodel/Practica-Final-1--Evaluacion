function esCurioso(num) {

  let sumaCubos = 0;
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    let digito = parseInt(numString[i]); 
    sumaCubos += digito * digito * digito;
  }

  return sumaCubos === num;
}

function mostrarNumerosCuriosos() {
  let curiosos = [];
  let numero = 1;

  while (curiosos.length < 5) {
    if (esCurioso(numero)) {
      curiosos.push(numero); 
    }
    numero++; 
  }
  let mensaje = "Son ejemplos de números curiosos: ";
  for (let i = 0; i < curiosos.length; i++) {
    mensaje += curiosos[i]; 
    if (i < curiosos.length - 1) {
      mensaje += ", ";  
    } else {
      mensaje += "."; 
    }
  }
  alert(mensaje)
}
