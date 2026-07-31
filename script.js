function responder(alternativa) {

    const resposta = document.getElementById("resposta");

    if (alternativa === "A") {

        resposta.textContent =
            "✅ Correto! A miopia é corrigida com lentes divergentes, que deslocam a imagem para a retina.";

    } else {

        resposta.textContent =
            "❌ Resposta incorreta. A miopia é corrigida com lentes divergentes.";

    }

}