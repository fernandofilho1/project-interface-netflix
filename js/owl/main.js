window.onload = function() {
    var user = null;

    while (user == null || user.trim() == '') {
        user = prompt('Olá, por gentileza, digite seu nome.');
        user = user.trim();
        if (user != null && user != '') {
            alert(`Seja bem-vindo(a) ${user}, é um prazer te-lô conosco, prepara a pipoca que vamos começar!`);
            var bodyNetflixElement = document.getElementById('body-netflix');
            bodyNetflixElement.style.display = 'block';

            var userNetflixElement = document.getElementById('user-netflix');
            userNetflixElement.innerHTML = user;
        } else {
            alert('Por favor, digite seu nome.');
        }
    }
}