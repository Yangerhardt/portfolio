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

  document.querySelector("#projects").innerHTML = "Projects";
  document.querySelector(
    "#proj-1"
  ).innerHTML = `The goal was to create a landing page to introduce a brand and
    it's products. Also, it should contain infos about product
    personalization and some carrousel with samples of the products. It
    was designed to be fully responsive and was created using
    Javascript, Bootstrap, HTMl and CSS.`;
  document.querySelector("#proj-2").innerHTML =
    "Part of the Alura Data Immersion, designed to induce students into data science and data analysis. Fully created using Python Pandas. All the project steps are commented on my GitHub.";
  document.querySelector("#proj-3").innerHTML =
    "One of my first projects using Python. Extremely good project to practice OOP. I chose to create classes and methods for each step to make the code more clear and also to practice. ";
  document.querySelector(
    "#proj-4"
  ).innerHTML = `Both calculator and cronometer served as pilot projects for better
    understanding of Javascript. The goal here was to create there
    functionalities using only JS and see how it works for the
    Back-End.`;
  document.querySelector("#proj-5").innerHTML =
    "Created for better understanding of localStorage and it's specificities. Though the design is pretty simple, it work's effectively as an item storage.";

  document.querySelector(".resume-button").innerHTML = "Resume";
};

export default ingles;
