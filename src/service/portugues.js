const portugues = () => {
  document.documentElement.style.setProperty("--btn-pt-br", "#718c99");
  document.documentElement.style.setProperty("--btn-en-us", "transparent");

  document.querySelector("h1").innerHTML = "Olá, meu nome é <span>Yan</span>.";
  document.querySelector("h3").innerHTML =
    "Sou um Desenvolvedor <span>Front-End</span>.";
  document.querySelector("h4").innerHTML =
    "Bem-vindo ao meu <span>portfólio</span>!";

  document.querySelector("#about").innerHTML = "Sobre mim";
  document.querySelector(".bottom-left-text").innerHTML =
    `Sou formado em engenharia pela UFRGS. Há um tempo comecei a estudar programação 
    e ela realmente me encantou, então decidi me dedicar a isso. Comecei estudando 
    Python, mas o que realmente me atraiu o olho foi o Front-End, então hoje direicono 
    meus estudos para ele.`;
  document.querySelector("#resume").innerHTML = "Currículo";
  document.querySelector(".resume-button").innerHTML = "Currículo";
  document.querySelector("#projects").innerHTML = "Projetos";

  document.querySelector("#proj-1").innerHTML = 
    `Projeto desenvolvido durante o Hackathon do Programa de Formação da
    FCamara e da Orange Juice. A problemática apresentada foi de criar uma
    plataforma de organização das trilhas de estudo disponíveis: Fullstacks,
    QA e UX/UI. Para isso, trabalhamos em conjunto com a UX/UI para entender
    as dores dos usuários e, assim, modelar um projeto melhor.
    <br /><span class="span-open-modal">Ver mais</span>
    `
  document.querySelector("#proj-2").innerHTML =
    `Criado com o objetivo de criação de uma landing page para apresentar a marca e
    seus produtos. Além disso, deveria conter informações sobre a personalização dos produtos 
    e amostras deles. Com o tempo, ela se tornaria uma página funcional de comércio eletrônico,
    com cadastro, login e checkout.
    <br /><span class="span-open-modal">Ver mais</span>
    `;
  document.querySelector("#proj-3").innerHTML = 
    `Projetado para funcionar como um controlador de fluxo de entrada e saída de dinheiro, 
    tornando possível adicionar e remover qualquer transação. Todos os dados são
    armazenado no navegador, para que não seja perdido quando a página é atualizada.
    <br /><span class="span-open-modal">Ver mais</span>
    `;

    // Para que o botão de "Veja mais" funcione:
    const vejaMais = document.querySelectorAll(".span-open-modal");
    const abreModal = document.querySelectorAll(".project-image");
  
    vejaMais.forEach((projeto, index) => {
      projeto.addEventListener("click", () => {
        abreModal[index].click()
      });
    });
};

export default portugues;
