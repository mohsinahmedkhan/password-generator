function randomPassword() {
    var length = document.getElementById("output-length").value
    var lower = document.getElementById("checkboxes1").checked
    var upper = document.getElementById("checkboxes2").checked
    var number = document.getElementById("checkboxes3").checked
    var symbol = document.getElementById("checkboxes4").checked

    var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
    var numberCase = 1234567890;
    var symbolCase = "!@#$%^&*()_+/";

    var result = "";
    if (lower) result += lowerCase
    if (upper) result += upperCase
    if (number) result += numberCase
    if (symbol) result += symbolCase

    if (result === "") {
        document.getElementById("input-text").value = "Please select at least one option...";
        return
    }

    var password = ""
    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * result.length)
        password += result[random]
    }

    document.getElementById("input-text").value = password
}

function passwordVisibility() {
    var pass = document.getElementById("input-text");
    var show = document.getElementById("eye");

    if (pass.type === "text") {
        pass.type = "password"
        show.src = "images/eye-slash-solid.svg"
    } else {
        pass.type = "text"
        show.src = "images/eye-solid.svg"
    }
}