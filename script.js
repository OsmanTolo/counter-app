const outputValue = document.getElementById("output");
const increaseValue = document.getElementById("increase");
const decreaseValue = document.getElementById("decrease");
const resetValue = document.getElementById("reset");

let counter = 0;

const incrementOutput = () => {
  counter++;
  outputValue.innerHTML = counter;
};

const decrementOutput = () => {
  if (counter > 0) {
    counter--;
  } else {
    resetOutput();
  }
  outputValue.innerHTML = counter;
};

const resetOutput = () => {
  counter = 0;
  outputValue.innerHTML = counter;
};

increaseValue.addEventListener("click", incrementOutput);
decreaseValue.addEventListener("click", decrementOutput);
resetValue.addEventListener("click", resetOutput);
