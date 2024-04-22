// Mostrar ou ocultar o botão "Voltar ao Topo" dependendo da posição do scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Função para rolar suavemente até o topo da página
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
}

