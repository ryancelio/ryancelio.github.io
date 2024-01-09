const number = document.getElementById("originalNumb");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const degLabel = document.getElementById("degLabel");

function fahrToCelsius(numb) {
  return ((numb - 32) * 5) / 9;
}

function celsToFahrenheit(numb) {
  return (numb * 9) / 5 + 32;
}

function setResult(numb) {
  result.textContent = numb.toFixed(1);
}
function setDegPosition(numb) {
  let degPos = 100;

  while (numb >= 10 || numb <= -10) {
    numb = numb / 10;
    degPos = degPos - 9;
    console.log(numb);
    console.log(degPos);
  }

  degLabel.style.right = `${degPos}px`;
}

function convert() {
  let temp = Number(number.value);
  if (toCelsius.checked) {
    result.textContent = fahrToCelsius(temp).toFixed(1) + "ºC";
  } else if (toFahrenheit.checked) {
    result.textContent = celsToFahrenheit(temp).toFixed(1) + "ºF";
  } else {
    result.textContent = "Select a unit.";
  }
  setDegPosition(temp);
}
number.addEventListener(`change`, convert());

/* Mobile Navbar */
const mobileNavAct = document.getElementById("mobileNavbarDrop");
const navBar = document.getElementById("navBarContent");

mobileNavAct.onclick = function () {
  if (navBar.style.display != "block") {
    navBar.style.display = "block";
  } else if (navBar.style.display == "block") {
    navBar.style.display = "none";
  }
};
