const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    nav.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});


const barraDePesquisa = document.querySelector('.barra-de-pesquisa input');
const cartao = document.querySelectorAll('.listagem-pokemon .cartao-pokemon');


barraDePesquisa.addEventListener('input', function () {
    const termoPesquisa = barraDePesquisa.value.toLowerCase();

    cartao.forEach(cartao => {
        const nomePokemon = cartao.querySelector('.informacoes span:first-child').textContent.toLowerCase();
        if (nomePokemon.includes(termoPesquisa)) {
            cartao.style.display = 'flex';
        } else {
            cartao.style.display = 'none';
        }
    });
});

