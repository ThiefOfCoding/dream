// Funções para controlar a exibição dos modais
function showFriends() {
  document.getElementById('friendsList').style.display = 'block';
}

function showDescription() {
  document.getElementById('description').style.display = 'block';
}

function openLink() {
  window.open("https://xat.com/italia", "_blank");
}

function showGallery() {
  document.getElementById('gallery').style.display = 'block';
}

// Função para fechar modais
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
