function modal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.classList.add("mostrar");
    modal.addEventListener("click", (event) => {
      if (event.target.id == modalID || event.target.className == "fechar") {
        modal.classList.remove("mostrar");
      }
    });
  }
}

const botaoModal = document.querySelector(".botaoModal");
botaoModal.addEventListener("click", () => modal("modal-promocao"));
