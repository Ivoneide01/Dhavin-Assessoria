document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formularioContato");
    var message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
        message.style.display = "block";
        alert("As informações foram enviadas!");
        enviarDadosParaFirebase(); // Função para enviar os dados do formulário para o Firebase
    });
});