const portugues = () => {
  document.documentElement.style.setProperty("--btn-pt-br", "#718c99");
  document.documentElement.style.setProperty("--btn-en-us", "transparent");

  document.querySelector("h1").innerHTML = "Olá, meu nome é <span>Yan</span>.";
  document.querySelector("h3").innerHTML =
    "Sou um Desenvolvedor <span>Front-End</span> Junior.";
  document.querySelector("h4").innerHTML =
    "Bem-vindo ao meu <span>portfólio</span>!";

  document.querySelector("#about").innerHTML = "Sobre mim";
  document.querySelector(".bottom-left-text").innerHTML =
    "Sou formado em engenharia pela UFRGS. Há um tempo comecei a estudar programação e ela realmente me encantou, então decidi me dedicar a isso. Comecei estudando Python, mas o que realmente me atraiu o olho foi o Front-End, então hoje direicono meus estudos para ele.";
  document.querySelector("#resume").innerHTML = "Currículo";

  document.querySelector("#projects").innerHTML = "Projetos";
  document.querySelector("#proj-1").innerHTML =
    "O objetivo era de criar uma landing page para introduzir a marca e os seus produtos. Além disso, deveria conter informações sobre a personalização dos produtos e um carrossel com amostras de imagens dos produtos. Desenvolvido para ser totalmente responsivo. Foi criado utilizando Javascript, Bootstrap, HTMl e CSS";
  document.querySelector("#proj-4").innerHTML =
    "Tanto a calculadora quanto o cronômetro serviram como projetos piloto para melhor entendimento da linguagem Javascript. O objetivo era de criar as funcionalidades usando somente o JS e entender como ela funciona para o Back-end.";
  document.querySelector(
    "#proj-5"
  ).innerHTML = `Projetado para funcionar como um controlador de fluxo de entrada e saída de dinheiro, tornando
      possível adicionar e remover qualquer transação. Todos os dados são
      armazenado no navegador, para que não seja perdido quando a página é atualizada.
       Foi totalmente desenvolvido com Javascript e estilizado com HTML
      e CSS.`;
  document.querySelector("#proj-2").innerHTML =
    "Parte da Imersão Dados da Alura, criada para introduzir como a linguagem Python é utilizada para análise de dados e nos apresentar um caso real para trabalhar. Foi desenvolvido utilizando a biblioteca Pandas do Python.";
  document.querySelector("#proj-3").innerHTML =
    "O objetivo era de praticar a POO (Programação Orientada ao Objeto) e criar um útil e bem conhecido jogo, o jogo da forca. Totalmente criado utilizando Python.";

  document.querySelector(".resume-button").innerHTML = "Currículo";
};

export default portugues;
