function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function arraySum(numbs) {
  let sum = 0;
  for (let num of numbs) {
    sum += num;
  }
  return sum;
}

function rollDice() {
  const numbOfDice = document.getElementById("numOfDice").value;
  const diceResults = document.getElementById("diceResult");
  const diceImg = document.getElementById("diceImg");
  const diceSum = document.getElementById("diceSum");
  let dices = [];
  let imgs = [];

  for (let i = 0; i < numbOfDice; i++) {
    const dice = getRandomNumber(1, 6);

    dices.push(dice);
    imgs.push(`<img src="img/${dice}.svg" alt="dice_${dice}">`);
  }

  diceResults.textContent = `Dices: ${dices.join(", ")}`;
  diceSum.textContent = `(${arraySum(dices)})`;
  diceImg.innerHTML = imgs.join("");
}

// Mobile Navbar
const mobileNavAct = document.getElementById("mobileNavbarDrop");
const navBar = document.getElementById("navBarContent");

mobileNavAct.onclick = function () {
  if (navBar.style.display != "block") {
    navBar.style.display = "block";
  } else if (navBar.style.display == "block") {
    navBar.style.display = "none";
  }
};
