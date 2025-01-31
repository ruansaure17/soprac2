new window.VLibras.Widget("https://vlibras.gov.br/app");

function toggleInformacoes(element) {
  const informacoes = element.querySelector(".informacoes");
  if (informacoes.style.display === "block") {
    informacoes.style.display = "none"; // Esconde as informações
  } else {
    informacoes.style.display = "block"; // Mostra as informações
  }
}

function toggleOptions(button) {
  const infosPortes = button.parentElement.querySelector(".infos_portes"); // Busca dentro da mesma estrutura
  if (infosPortes.style.display === "block") {
    infosPortes.style.display = "none"; // Esconde as opções
  } else {
    infosPortes.style.display = "block"; // Mostra as opções
  }
}
