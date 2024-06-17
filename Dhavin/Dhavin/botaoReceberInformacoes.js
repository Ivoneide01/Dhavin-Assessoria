// Suponha que você tenha um formulário com os campos name e email
const form = document.getElementById("formularioContato");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Captura dos valores dos campos do formulário
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;

  // Chama a função para enviar dados para o Firebase
  enviarDadosFormulario(name, email)
    .then(() => {
      console.log('Dados do formulário de contato enviados com sucesso!');
      // Exibe a mensagem de sucesso
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
      // Opcional: oculta a mensagem após 3 segundos
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 3000);
    })
    .catch((error) => {
      console.error('Erro ao enviar dados do formulário de contato:', error);
    });

  // Limpa o formulário após o envio
  form.reset();
});
