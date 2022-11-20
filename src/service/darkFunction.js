const darkFunction = (c) => {
  if (c % 2 == 0) {
    document.documentElement.style.setProperty("--background-color", "#696969");
    document.documentElement.style.setProperty("--text-color", "#BEBEBE");
    document.getElementById("dark-mode").src =
      "../../src/public/icons/light-mode.png";
  } else {
    document.documentElement.style.setProperty("--background-color", "#e2e7eb");
    document.documentElement.style.setProperty("--text-color", "#black");
    document.getElementById("dark-mode").src =
      "../../src/public/icons/dark-mode.png";
  }
};

export default darkFunction;
