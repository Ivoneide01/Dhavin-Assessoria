document.addEventListener("DOMContentLoaded", function() {
    var infoButton = document.getElementById("info");
    var message = document.getElementById("message");

    infoButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
        message.style.display = "block";
        alert("As informações foram enviadas!");
    });
});
