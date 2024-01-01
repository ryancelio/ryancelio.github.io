const numberDisp = document.getElementById("number");
const genBtn = document.getElementById("Generate");
const copy = document.getElementById("copy");
const isAutoCopy = document.getElementById("isAutoCopy");

function copyContent(element) {
  navigator.clipboard.writeText(element.textContent);
}
function getRandomNumber(min, max) {
  // Returns a random number with inclusive max
  return Math.floor(Math.random() * (max - min + 1) + min);
}

genBtn.onclick = function () {
  let min = Number(document.getElementById("min").value);
  let max = Number(document.getElementById("max").value);

  numberDisp.textContent = getRandomNumber(min, max);

  if (isAutoCopy.checked) {
    copyContent(numberDisp);
  }
};
// Function needs to be contained in an anonymous function to work.
copy.onclick = function () {
  copyContent(numberDisp);
};

// Mobile Navbar
const mobileNavAct = document.getElementById("mobileNavbarDrop");
const navBar = document.getElementById("navBarContent");

mobileNavAct.onclick = function() {
    if(navBar.style.display != "block"){
        navBar.style.display = 'block';
    }else if(navBar.style.display == "block"){
        navBar.style.display = 'none';
    }
}