// Selecionando o botão "Estou com Sorte"
const botaoEstouComSorte = document.querySelector('form [type="button"]');

botaoEstouComSorte.addEventListener("click", () => {
    location.href = "https://doodles.google/";
});

// Selecionando o botão de menu
const menu = document.querySelector("#btn-menu");  // Use # para ID

menu.addEventListener("click", () => {
    console.log("Clicou");
});

// Selecionando o botão "Pesquisa Google"
const botaoPesquisaGoogle = document.querySelector('form [type="submit"]');

botaoPesquisaGoogle.addEventListener("click", () => {

    location.href = "https://www.youtube.com/"

});

const Gmail = document.querySelector('nav [class="link-desktop"]');

Gmail.addEventListener("Click", () => {
    location.href = "https://mail.google.com/mail/u/0/#inbox";
});
