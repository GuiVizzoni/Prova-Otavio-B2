function NumPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function checkNumPrimo() {
  const InputNumero = document.getElementById('InputNumero');
  const Mensagem = document.getElementById('Mensagem');
  const numero = parseInt(InputNumero.value);

  if (NumPrimo(numero)) {
    alert (numero + ' é um número primo.');
  } else {
    alert (numero + ' não é um número primo.');
  }
}