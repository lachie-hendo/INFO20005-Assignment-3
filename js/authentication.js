/* checks for empty input fields in form and returns with an alert and highlighted box */
function validateForm() {
    let userInput = document.querySelectorAll("#form-textfield-group input");
    let valid = true;

    userInput.forEach(input => {
        if (input.value == "") {
            input.style.borderColor = "red";
            valid = false;
        } else {
            input.style.borderColor = "black";
        }
    });

    if (valid === false) {
        alert("Please fill all required fields");
    }
    return valid;
}