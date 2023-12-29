const numberDisp = document.getElementById("number");
const genBtn = document.getElementById("Generate");
const copy = document.getElementById("copy");
const isAutoCopy = document.getElementById("isAutoCopy");

genBtn.onclick = function(){
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);

    let number = Math.floor(Math.random() * (max - min + 1) + min);
 
    numberDisp.textContent = Number(number);

    if(isAutoCopy.checked){
        navigator.clipboard.writeText(numberDisp.textContent);    
    }
}
copy.onclick = function(){
    navigator.clipboard.writeText(numberDisp.textContent);
}