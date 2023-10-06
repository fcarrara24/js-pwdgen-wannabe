/**
 * function takes all items in the html file with the class @info 
 * stores them in @arrayPass, concat all of their value in @password
 * then, changes .innerHTML of @generatedPassword .
 */
function sendData() {
    let arrayPass = document.getElementsByClassName("info");
    let password = "";
    for (let i = 0; i < arrayPass.length; i++) {
        password = password + String(arrayPass[i].value);
        //checking all fields compiled
        if (arrayPass[i].value === "") {
            document.getElementById("errorContainer").style.display = "block";
            return;
        }
    }
    //replacing spacing with nothing
    password = password.replace(/\s/g, '');
    //printing document only if all fields are compiled    
    document.getElementById("generatedPassword").innerHTML = password + "21";
    document.getElementById("errorContainer").style.display = "none";
    document.getElementById("passContainer").style.display = "block";
    return;
}