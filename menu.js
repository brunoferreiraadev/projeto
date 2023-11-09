// expandir o menu
var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)
// expandir o menu

// var btnExp = document.querySelector('#btn-exp')
// var menuSide = document.querySelector('.menu-lateral')

// btnExp.addEventListener('click', function () {
//     menuSide.classList.toggle('expandir')
// })


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
