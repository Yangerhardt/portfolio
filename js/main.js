var c = 0;

function dark() {
  if (c % 2 == 0) {
    document.documentElement.style.setProperty("--background-color", "#696969");
    document.documentElement.style.setProperty("--text-color", "#BEBEBE");
    document.getElementById("dark-mode").src =
      "/portfolio/Icons/light-mode.png";
    c++;
  } else {
    document.documentElement.style.setProperty("--background-color", "#e2e7eb");
    document.documentElement.style.setProperty("--text-color", "#black");
    document.getElementById("dark-mode").src = "/portfolio/Icons/dark-mode.png";
    c++;
  }
}

let pt_br = document.querySelector("#btn-br");
let en_us = document.querySelector("#btn-en");

pt_br.addEventListener("click", () => {
  document.documentElement.style.setProperty("--btn-pt-br", "#718c99");
  document.documentElement.style.setProperty("--btn-en-us", "transparent");

  document.querySelector("h1").innerHTML = "Olá, meu nome é <span>Yan</span>.";
  document.querySelector("h3").innerHTML =
    "Sou um Desenvolvedor <span>Front-End</span> Junior.";
  document.querySelector("h4").innerHTML =
    "Bem-vindo ao meu <span>portfólio</span>!";

  document.querySelector("#about").innerHTML = "Sobre mim";
  document.querySelector(".bottom-left-text").innerHTML =
    "Sou formado em engenharia pela UFRGS. Há um tempo comecei a estudar programação e ela realmente me encantou. Posso oferecer códigos limpos e funcionais, assim como maior interatividade com as animações web.";
  document.querySelector("#resume").innerHTML = "Currículo";

  document.querySelector("#projects").innerHTML = "Projetos";
  document.querySelector("#proj-1").innerHTML =
    "O objetivo era de criar uma landing page para introduzir a marca e os seus produtos. Desenvolvido para ser totalmente responsivo. Foi criado utilizando Javascript, Bootstrap, HTMl e CSS";
  document.querySelector("#proj-4").innerHTML =
    "Tanto a calculadora quanto o cronômetro serviram como projetos piloto para melhor entendimento da linguagem Javascript. O objetivo era de criar as funcionalidades usando somente o JS e entender como ela funciona para o Back-end.";
  document.querySelector("#proj-5").innerHTML =
    "Criado para melhor entendimento do armazenamento de dados no navegador e como acessá-lo. O design minimalista foi criado utilizando HTML e CSS. O armazenamento e acesso aos dados de input foram feitos utilizando o vanilla Javascript.";
  document.querySelector("#proj-2").innerHTML =
    "Parte da <strong>Imersão Dados da Alura</strong>, criada para introduzir como a linguagem Python é utilizada para análise de dados e nos apresentar um caso real para trabalhar. Foi desenvolvido utilizando a biblioteca Pandas do Python.";
  document.querySelector("#proj-3").innerHTML =
    "O objetivo era de praticar a POO (Programaç~ão Orientada ao Objeto) e criar um útil e bem conhecido jogo, o jogo da forca. Totalmente criado utiliazndo Python.";

  document.querySelector(".resume-button").innerHTML = "Currículo";
});

en_us.addEventListener("click", () => {
  document.documentElement.style.setProperty("--btn-pt-br", "transparent");
  document.documentElement.style.setProperty("--btn-en-us", "#718c99");

  document.querySelector("h1").innerHTML =
    "Hi there, my name is <span>Yan</span>.";
  document.querySelector("h3").innerHTML =
    "I'm a <span>Front-End</span> Junior Developer.";
  document.querySelector("h4").innerHTML =
    "Welcome to my <span>portfolio</span>!";

  document.querySelector("#about").innerHTML = "About me";
  document.querySelector(".bottom-left-text").innerHTML =
    "      I am an engineer graduate from UFRGS. A while ago I started studying programming and it really enchanted me. I can provide clean code, as well as more interactive with web animations.";
  document.querySelector("#resume").innerHTML = "Resume";

  document.querySelector("#projects").innerHTML = "Projects";
  document.querySelector("#proj-1").innerHTML =
    "Designed to introduce the brand Patchwork com Arte. Created to be fully responsive and built using Bootstrap, Javascript, HTML and CSS.";
  document.querySelector("#proj-2").innerHTML =
    "Part of the Alura Data Immersion, designed to induce students into data science and data analysis. Fully created using Python Pandas. All the project steps are commented on my GitHub.";
  document.querySelector("#proj-3").innerHTML =
    "One of my first projects using Python. Extremely good project to practice OOP. I chose to create classes and methods for each step to make the code more clear and also to practice. ";
  document.querySelector("#proj-4").innerHTML =
    "Both calculator and cronometer were created usign Javascript. The simplistic design was made using HTML and CSS.";
  document.querySelector("#proj-5").innerHTML =
    "Created for better understanding of localStorage and it's specificities. Though the design is pretty simple, it work's effectively as an item storage.";

  document.querySelector(".resume-button").innerHTML = "Resume";
});
