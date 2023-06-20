function validarSenha() {
  const senhaInput = document.getElementById('senhaInput');
  const senha = senhaInput.value;

  const Maiuscula = /[A-Z]/;
  const Minuscula = /[a-z]/;
  const Numero = /[0-9]/;

  if (senha.length < 8) {
    alert('A senha deve ter pelo menos 8 caracteres.');
    return false;
  }

  if (!Maiuscula.test(senha)) {
    alert('A senha deve conter pelo menos uma letra maiúscula.');
    return false;
  }

  if (!Minuscula.test(senha)) {
    alert('A senha deve conter pelo menos uma letra minúscula.');
    return false;
  }

  if (!Numero.test(senha)) {
    alert('A senha deve conter pelo menos um número.');
    return false;
  }

  alert('A senha é válida.');
  return true;
}