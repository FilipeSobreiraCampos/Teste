// scripts.js

// Função para alterar o texto do parágrafo quando o botão é clicado
document.getElementById('botao').addEventListener('click', function() {
    var paragrafo = document.getElementById('mensagem');
    paragrafo.textContent = 'Texto alterado com JavaScript!';
});
