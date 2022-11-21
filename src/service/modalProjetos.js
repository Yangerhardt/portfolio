

const modalProjetos = () => {
  const abreModal = document.querySelectorAll(".project-image");
  const modal = document.querySelector("#modal-projetos");
  const fecharModal = document.querySelector(".fechar-modal");
  const tituloProjeto = document.querySelector(".nome-projeto-modal")
  
  for (let project of abreModal) {
    project.addEventListener("click", () => {
      tituloProjeto.innerHTML = project.parentElement.parentElement.dataset.name;
      modal.showModal()
    })
  }  

  fecharModal.addEventListener("click", () => {
    modal.close();
  });

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
}

export default modalProjetos

