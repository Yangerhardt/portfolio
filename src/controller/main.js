import darkFunction from "../service/darkFunction.js";
import ingles from "../service/ingles.js";
import portugues from "../service/portugues.js";

const darkMode = document.querySelector("#dark-mode")
let pt_br = document.querySelector("#btn-br");
let en_us = document.querySelector("#btn-en");
let c = 0;

window.addEventListener("DOMContentLoaded", () => {

})

darkMode.addEventListener("click", () => {
  darkFunction(c)
  c++;
})


pt_br.addEventListener("click", () => {
  portugues()
});

en_us.addEventListener("click", () => {
  ingles()
});
