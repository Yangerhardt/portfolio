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

  $("#teste").html("Olá, meu nome é <span>Yan</span>.");
  document.querySelector("h3").innerHTML =
    "Sou um Desenvolvedor <span>Front-End</span> Junior.";
  document.querySelector("h4").innerHTML =
    "Bem-vindo ao meu <span>portfólio</span>!";
});
