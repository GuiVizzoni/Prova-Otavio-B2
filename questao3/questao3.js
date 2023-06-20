function calcularFatorial() {
  const numeroInput = document.getElementById('numeroInput');
  const resultado = document.getElementById('resultado');

  const numero = parseInt(numeroInput.value);
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  resultado.innerText = 'O fatorial de ' + numero + ' é: ' + fatorial;
}