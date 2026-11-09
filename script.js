
// QUIZ
function responder(opcao) {
  const resultado = document.getElementById("resultado");

  if (opcao === "Linux") {
    resultado.textContent = "✅ Parabéns! Você acertou!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Não foi dessa vez. Tente novamente!";
    resultado.style.color = "red";
  }
}

// MODO ESCURO
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function() {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    botaoTema.textContent = "☀️ Modo claro";
  } else {
    botaoTema.textContent = "🌙 Modo escuro";
  }

});
