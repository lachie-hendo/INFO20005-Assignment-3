//quantity increment and decrement button for products in cart//
function addQuantity(button) {
    let quantityInput = button.closest(".quantity-group").querySelector(".quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function minusQuantity(button) {
    let quantityInput = button.closest(".quantity-group").querySelector(".quantity");
    if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

//checks for empty input fields in form and returns with an alert and highlighted box//
function validateForm() {
    let userInput = document.querySelectorAll("#form-textfield-group input");
    let valid = true;

    userInput.forEach(input => {
        if (input.value == "") {
            input.style.borderColor = "red";
            alert("Please fill all required fields");
            valid = false;
        }
    });
    return valid;
}