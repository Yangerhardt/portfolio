const descricaoModal = (nomeProjeto) => {
  const descricao = document.querySelector(".modal-descricao-projeto");
  const linkProjeto = document.querySelector(".modal-redireciona-proj");
  const dsecricoesProjetos = document.querySelectorAll(".project-description")

  if (nomeProjeto == "hackathon") {
    descricao.innerHTML = dsecricoesProjetos[0].innerHTML;
    linkProjeto.href = "https://github.com/orgs/Hackaton-Squad-22/repositories";
  } else if (nomeProjeto == "patchwork-com-arte") {
    descricao.innerHTML = dsecricoesProjetos[1].innerHTML;
    linkProjeto.href = "https://github.com/Yangerhardt/patchwork-com-arte"
  } else if (nomeProjeto == "controle-gastos") {
    descricao.innerHTML = dsecricoesProjetos[2].innerHTML
    linkProjeto.href = "https://github.com/Yangerhardt/controle-gastos-ts";
  }
};

export default descricaoModal;