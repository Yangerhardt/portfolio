import carousel from "../service/carousel.js";
import darkFunction from "../service/darkFunction.js";
import ingles from "../service/ingles.js";
import modalProjetos from "../service/modalProjetos.js";
import portugues from "../service/portugues.js";

const darkMode = document.querySelector("#dark-mode");
let pt_br = document.querySelector("#btn-br");
let en_us = document.querySelector("#btn-en");
let c = 0;

darkMode.addEventListener("click", () => {
  darkFunction(c);
  c++;
});

pt_br.addEventListener("click", () => {
  portugues();
});

en_us.addEventListener("click", () => {
  ingles();
});

modalProjetos()

carousel()