function changeBG(bgImg) {
    document.body.style.backgroundImage = "url('"+bgImg+"')"; 
}


function saveInput() {
    var inputElement = document.getElementById("userName");
    var inputValue = inputElement.value;
    localStorage.setItem("userValue", inputValue);
    displayInput();
}

function displayInput() {
    var display = document.getElementById("displayMessage");
    var storedInput = localStorage.getItem("userValue");
    display.innerHTML = storedInput;
}