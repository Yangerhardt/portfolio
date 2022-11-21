const descricaoModal = (nomeProjeto) => {
  const descricao = document.querySelector(".modal-descricao-projeto");
  const linkProjeto = document.querySelector(".modal-redireciona-proj");

  if (nomeProjeto == "hackathon") {
    descricao.innerHTML = `Projeto desenvolvido durante o Hackathon do Programa de Formação da
    FCamara e da Orange Juice. A problemática apresentada foi de criar uma
    plataforma de organização das trilhas de estudo disponíveis: Fullstacks,
    QA e UX/UI. Para isso, trabalhamos em conjunto com a UX/UI para entender
    as dores dos usuários e, assim, modelar um projeto melhor.`;
    linkProjeto.href = "https://github.com/orgs/Hackaton-Squad-22/repositories";
  } else if (nomeProjeto == "patchwork-com-arte") {
    descricao.innerHTML = `O objetivo era de criar uma landing page para introduzir a marca 
    e os seus produtos. Além disso, deveria conter informações sobre a personalização dos 
    produtos e um carrossel com amostras de imagens dos produtos. Desenvolvido para ser 
    totalmente responsivo.`;
    linkProjeto.href = "https://github.com/Yangerhardt/patchwork-com-arte"
  } else if (nomeProjeto == "controle-gastos") {
    descricao.innerHTML = `Projetado para funcionar como um controlador de fluxo de entrada e 
    saída de dinheiro, tornandopossível adicionar e remover qualquer transação. Todos os dados 
    são armazenado no navegador, para que não seja perdido quando a página é atualizada.`;
    linkProjeto.href = "https://github.com/Yangerhardt/controle-gastos-ts";
  }
};

export default descricaoModal;
