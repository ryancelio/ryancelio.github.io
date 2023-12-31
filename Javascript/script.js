const mobileNavAct = document.getElementById("mobileNavbarDrop");
const navBar = document.getElementById("navBarContent");

mobileNavAct.onclick = function() {
    if(navBar.style.display != "block"){
        navBar.style.display = 'block';
    }else if(navBar.style.display == "block"){
        navBar.style.display = 'none';
    }
}