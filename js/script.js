

function sendData() {
    let arrayPass = document.getElementsByClassName("info");
    let password = "";
    for (let i = 0; i < arrayPass.length; i++) {
        password = password + String(arrayPass[i].value);
    }
    document.getElementById("generatedPassword").innerHTML = password + "21";
}