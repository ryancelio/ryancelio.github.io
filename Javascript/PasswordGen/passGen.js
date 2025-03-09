function generatePassword(
  length,
  hasLowercase,
  hasUppercase,
  hasNumber,
  hasSymbol
) {
  const lowercase = "abcdefghijklmnopqrstuvwyz";
  const uppercase = "ABCDEFHIJKLMNOPQRSTUVXYZ";
  const numbers = "01234567890123456789012345";
  const symbols = "!@#$%&*()_+=-/;}{][.,";
  let allowedChars = "";
  let password = "";

  //If the condition is true concatenate the respective String
  allowedChars += hasLowercase ? lowercase : "";
  allowedChars += hasUppercase ? uppercase : "";
  allowedChars += hasNumber ? numbers : "";
  allowedChars += hasSymbol ? symbols : "";

  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randIndex);
  }

  return password;
}
const passwordDisp = document.getElementById("passwordDisp");
const errorDisp = document.getElementById("errorDisp");

function displayPassword() {
  const length = document.getElementById("passwordLength").value;
  const includeLowerase = document.getElementById("includeLowercase").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  let password = generatePassword(
    length,
    includeLowerase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  if (length <= 0) {
    errorDisp.textContent = `Password length cannot be ${length}`;
  } else if (
    !includeLowerase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    errorDisp.textContent = `At least one option must be selected.`;
  } else {
    errorDisp.textContent = ``;
    passwordDisp.textContent = password;
  }
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
