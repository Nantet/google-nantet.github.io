// Selecionando o botão "Estou com Sorte"
const botaoEstouComSorte = document.querySelector('form [type="button"]');

botaoEstouComSorte.addEventListener("click", () => {
    location.href = "https://www.youtube.com/watch?v=FYaYtvmqP6c";
});

// Selecionando o botão de menu
const menu = document.querySelector("#btn-menu");  // Use # para ID

menu.addEventListener("click", () => {
    console.log("Clicou");
});
