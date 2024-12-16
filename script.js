// script.js
document.getElementById("avaliacaoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    const posto = document.getElementById("posto").value;
    const equipamentos = document.getElementById("equipamentos").value;
    const iluminacao = document.getElementById("iluminacao").value;
    const temperatura = document.getElementById("temperatura").value;
    const treinamento = document.getElementById("treinamento").value;
    const comentarios = document.getElementById("comentarios").value;

    // Mostrar as informações do formulário no console (pode ser substituído por envio para servidor)
    console.log({
        posto,
        equipamentos,
        iluminacao,
        temperatura,
        treinamento,
        comentarios
    });

    alert("Avaliação enviada com sucesso!");
});
