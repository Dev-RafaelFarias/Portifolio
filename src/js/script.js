const btnMostrar = document.querySelector(".btn-mostrar");
const projetosInativo = document.querySelectorAll(".projeto:not(.ativo)");


btnMostrar.addEventListener('click', () => {
    mostrarProjetos();
    removerBotao();
});

function removerBotao() {
    btnMostrar.classList.add("remover");
}

function mostrarProjetos() {
    projetosInativo.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}
