import descricaoModal from "./descricaoModal.js";
import stacksModal from "./stacksModal.js";

const modalProjetos = () => {
  const abreModal = document.querySelectorAll(".project-image");
  const modal = document.querySelector("#modal-projetos");
  const fecharModal = document.querySelector(".fechar-modal");
  const tituloProjeto = document.querySelector(".nome-projeto-modal");
  const modalImages = document.querySelectorAll(".modal-img");
  const stacks = document.querySelectorAll(".stack");
  const vejaMais = document.querySelectorAll(".span-open-modal");

  vejaMais.forEach((projeto, index) => {
    projeto.addEventListener("click", () => {
      abreModal[index].click()
    });
  });

  for (let project of abreModal) {
    project.addEventListener("click", () => {
      let name = project.dataset.name;
      tituloProjeto.innerHTML =
        project.parentElement.parentElement.dataset.name;
      modalImages.forEach((image, index) => {
        image.src = `../../src/public/images/${project.dataset.name}${index}.png`;
      });
      descricaoModal(name)

      stacksModal(name, stacks);
      modal.showModal();
    });
  }

  fecharModal.addEventListener("click", () => {
    modal.close();
  });
};

export default modalProjetos;
