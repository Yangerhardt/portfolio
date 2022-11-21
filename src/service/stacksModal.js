const stacksModal = (name, stacks) => {
  // Remove as stacks de back-end
  if (name != "hackathon") {
    stacks[0].innerHTML = "Javascript";
    const removeStacks = [...stacks].slice(-4);
    for (let stack of removeStacks) {
      stack.classList.add("escondido");
    }
  } else {
    stacks[0].innerHTML = "Javascript";
    const removeStacks = [...stacks].slice(-4);
    for (let stack of removeStacks) {
      stack.classList.remove("escondido");
    }
  }
  if (name == "controle-gastos") {
    stacks[0].innerHTML = "Typescript";
  }
};

export default stacksModal;
