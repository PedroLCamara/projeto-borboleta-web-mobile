/*
    COLLAPSIBLE MENU
*/
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu.svg"

    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close.svg"
    }
}

function revelaTxt(btn){
    let sect = btn.parentElement;
    let sectAmostra = sect.querySelector(".amostra");
    let sectHide = sect.querySelector(".hide");

    //para o programa pegar o status da tela, e não o q é atribuido no código
    let status = window.getComputedStyle(sectHide).display !== "none"; //bool

    sectHide.style.display = (status)? "none":"block";
    sectAmostra.style.display = (sectHide.style.display == "none")? "block":"none";

    btn.textContent = (btn.textContent == "Ver mais")? "Ver menos":"Ver mais";
}