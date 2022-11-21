const ingles = () => {
  document.documentElement.style.setProperty("--btn-pt-br", "transparent");
  document.documentElement.style.setProperty("--btn-en-us", "#718c99");

  document.querySelector("h1").innerHTML =
    "Hi there, my name is <span>Yan</span>.";
  document.querySelector("h3").innerHTML =
    "I'm a <span>Front-End</span> Developer.";
  document.querySelector("h4").innerHTML =
    "Welcome to my <span>portfolio</span>!";

  document.querySelector("#about").innerHTML = "About me";
  document.querySelector(
    ".bottom-left-text"
  ).innerHTML = `I am an engineer graduated from UFRGS. A while ago I started studying
    programming and it really enchanted me, so I decided to go for it. I
    started studying Python, but what really caught my eye was the
    Front-End, so now I direct my studies towards it.`;
  document.querySelector("#resume").innerHTML = "Resume";
  document.querySelector(".resume-button").innerHTML = "Resume";
  document.querySelector("#projects").innerHTML = "Projects";

  document.querySelector("#proj-1").innerHTML = 
    `Project developed during the Hackathon of the Training Program of
    FCamara and Orange Juice. The problem presented was to create an
    available study trail organization platform: Fullstacks, QA and
    UX/UI. For this, we work together with the UX/UI to understand the
    pains of users and thus model a better project.
    <br /><span class="span-open-modal">See more</span>
    `
  document.querySelector("#proj-2").innerHTML =
    `The goal was to create a landing page to introduce a brand and
    it's products. Also, it should contain infos about product
    personalization and some carrousel with samples of the products.
    Eventually, it would become a functional e-commerce webpage,
    with registration, login and checkout.
    <br /><span class="span-open-modal">See more</span>
    `
  document.querySelector("#proj-3").innerHTML =
  `Desgined to work as a monye inflow and outflow controller,
  making possible to add and remove any transaction. All the data
  is storaged in the browser, so that it's not lost when the page
  is refreshed.
  <br /><span class="span-open-modal">See more</span>
  `

  // Para que o botão de "Veja mais" funcione:
  const vejaMais = document.querySelectorAll(".span-open-modal");
  const abreModal = document.querySelectorAll(".project-image");

  vejaMais.forEach((projeto, index) => {
    projeto.addEventListener("click", () => {
      abreModal[index].click()
    });
  });
  
};

export default ingles;
