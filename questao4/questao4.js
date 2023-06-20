function QuadradoPerfeito() {
  const numeroInput = document.getElementById('numeroInput');
  const resultado = document.getElementById('resultado');

  const numero = parseInt(numeroInput.value);
  const raizQuadrada = Math.sqrt(numero);

  if (raizQuadrada === Math.floor(raizQuadrada)) {
    resultado.innerText = numero + ' é um quadrado perfeito.';
  } else {
    resultado.innerText = numero + ' não é um quadrado perfeito.';
  }
}