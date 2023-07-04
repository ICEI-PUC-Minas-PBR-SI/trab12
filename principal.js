function initMap() {
    var center = { lat: 37.7749, lng: -122.4194 };

    var mapOptions = {
        center: center,
        zoom: 12
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Localização'
    });
}

window.onload = function () {
    initMap();
};
// Função para salvar a notícia no Local Storage
function salvarNoticia() {
    // Obtenha os dados da notícia a partir do formulário
    var id = document.getElementById('id').value;
    var titulo = document.getElementById('titulo').value;
    var conteudo = document.getElementById('conteudo').value;
    var autor = document.getElementById('autor').value;
  
    // Crie um objeto para representar a notícia
    var noticia = {
      id: id,
      titulo: titulo,
      conteudo: conteudo,
      autor: autor
    };
  
    // Converta o objeto em uma string JSON
    var noticiaJSON = JSON.stringify(noticia);
  
    // Salve a notícia no Local Storage
    localStorage.setItem('noticia', noticiaJSON);
  
    // Exiba uma mensagem de sucesso
    alert('Notícia salva com sucesso!');
  }
  
  // Função para recuperar a notícia do Local Storage
  function recuperarNoticia() {
    // Recupere a notícia do Local Storage
    var noticiaJSON = localStorage.getItem('noticia');
  
    // Verifique se a notícia existe
    if (noticiaJSON) {
      // Converta a string JSON de volta para um objeto
      var noticia = JSON.parse(noticiaJSON);
  
      // Preencha o formulário com os dados da notícia
      document.getElementById('id').value = noticia.id;
      document.getElementById('titulo').value = noticia.titulo;
      document.getElementById('conteudo').value = noticia.conteudo;
      document.getElementById('autor').value = noticia.autor;
    }
  }
  
  // Chame a função de recuperação ao carregar a página
  window.onload = recuperarNoticia;
  