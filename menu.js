// recarrega o site e volta para o inicio sem aparecer que está subindo,
// usei junto o preloader, funciona nas 3 opções, F5, CTRL + F5 e também no botão de recarregar a página no navegador

window.onload = function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    if (performance.navigation.type !== 1) {
        document.querySelector(".links1 a[href='#top']").style.display = 'none';
    }

    window.scrollTo(0, 0);
};

// recarrega o site e volta para o inicio sem aparecer que está subindo,
// usei junto o preloader, funciona nas 3 opções, F5, CTRL + F5 e também no botão de recarregar a página no navegador

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





