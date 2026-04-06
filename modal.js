const modal = document.getElementById("modalAviso");
const btnEntrar = document.getElementById("btnEntrar");
const btnClose = document.getElementById("closeAviso");
const btnOk = document.getElementById("btnOk");

btnEntrar.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

const fecharModal = () => modal.style.display = "none";

btnClose.onclick = fecharModal;
btnOk.onclick = fecharModal;

window.onclick = (event) => {
    if (event.target == modal) {
        fecharModal();
    }
};