/* checks for empty input fields in form and returns with an alert and highlighted box */
function validateForm() {
    let userInput = document.querySelectorAll("#form-textfield-group input");
    let valid = true;
    let userEmail = document.querySelector("#email")
    let emailValue = userEmail.value
    let alertMessage = "Error submitting form: "

    userInput.forEach(input => {
        if (input.value == "") {
            input.style.borderColor = "red";
            alertMessage += "Please fill all required fields"
            valid = false;
        } 
        else {
            input.style.borderColor = "black";
            
                if (emailValue.includes("@") == false) {
                    input.style.borderColor = "red";
                    alertMessage += "Please enter a valid email"
                    valid = false;
                }
        }
    });

    if (valid === false) {
        alert(alertMessage);
    }
    return valid;
}

//ideas of code below by Adreas Wik, https://awik.io/allow-numbers-input-field-javascript/ //
//restrict user to only input numbers in field, as type=number in html allows more than 3 digits to be typed//
let inputDate = document.querySelector("#cardDate")

inputDate.onkeydown = function(event) {
    if(isNaN(event.key) && event.key !== "Backspace" && event.key !== "/") {
      event.preventDefault();
    }
  }

function numberOnly(element) {
  element.onkeydown = function(event) {
    if(isNaN(event.key) && event.key !== "Backspace") {
      event.preventDefault();
    }
  }
}