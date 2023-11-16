// expandir o menu
// var menuItem = document.querySelectorAll('.item-menu')

// function selectLink() {
//     menuItem.forEach((item) =>
//         item.classList.remove('ativo')
//     )
//     this.classList.add('ativo')
// }

// menuItem.forEach((item) =>
//     item.addEventListener('click', selectLink)
// )
// expandir o menu

// var btnExp = document.querySelector('#btn-exp')
// var menuSide = document.querySelector('.menu-lateral')

// btnExp.addEventListener('click', function () {
//     menuSide.classList.toggle('expandir')
// })

// expandir o menu
const menuLateral = document.querySelector(".menu-lateral");
const btnExpandir = document.querySelector("#btn-exp");

btnExpandir.addEventListener("click", () => {
    menuLateral.classList.toggle("expandir");
});

document.addEventListener("click", (event) => {
    if (!menuLateral.contains(event.target) && !btnExpandir.contains(event.target)) {
        menuLateral.classList.remove("expandir");
    }
});
// expandir o menu

// codigo para ficar selecionado a tag a referente a página ativa

var currentUrl = window.location.href;

if (currentUrl.includes("index.html")) {
    document.querySelector(".menu-lateral .home").classList.add("ativo");
}
// codigo para ficar selecionado a tag a referente a página ativa


// função para recarregar a página e voltar no início do site

// Armazena a posição de rolagem antes de recarregar a página
window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
});
// Armazena a posição de rolagem antes de recarregar a página

// Verifica se há uma posição de rolagem armazenada e a aplica após o carregamento da página
window.addEventListener('load', function () {
    var scrollPosition = sessionStorage.getItem('scrollPosition');

    if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        sessionStorage.removeItem('scrollPosition'); // Limpa a posição de rolagem armazenada
    }

    // Exibe o corpo da página após o carregamento
    document.body.style.display = 'block';
});
// Verifica se há uma posição de rolagem armazenada e a aplica após o carregamento da página

// Recarrega a página completamente quando a tecla F5 é pressionada
document.addEventListener('keydown', function (e) {
    if (e.key === 'F5') {
        e.preventDefault();
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        document.body.style.display = 'none'; // Oculta o corpo da página antes de recarregar
        window.location.reload(true);
    }
});
// Recarrega a página completamente quando a tecla F5 é pressionada

// função para recarregar a página e voltar no início do site

//comando para subir o site ao topo quando clicar na div inicio
const botao = document.querySelector(".inicio");
const inicio = document.querySelector("#top"); // Adicione um ID à tag <body> para referenciá-la aqui
botao.addEventListener("click", function (event) {
    event.preventDefault();
    inicio.scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});
//comando para subir o site ao topo quando clicar na div inicio