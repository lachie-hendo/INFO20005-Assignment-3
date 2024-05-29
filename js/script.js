function setProductDescriptionHeight() {

    let productFrame = document.querySelectorAll('.product-panel');
    let productDescription = document.querySelectorAll('.product-box');

    if (productFrame.length > 0) {
        /* get the height of the image frame */
        let productHeight = productFrame[0].offsetHeight;
        // console.log(productHeight);

        /* adjust description box size if viewport is above desktop width */
        if (window.innerWidth > 933) {
            /* set the height of all descriptions to the height of the product */
            productDescription.forEach(function(product) {
                product.style.height = productHeight + 'px';
            });
        } else {
            productDescription.forEach(function(product) {
                product.style.height = 'auto';
            }); 
        }
    }
}

function setPriceSize() {
    let priceInputs = document.querySelectorAll('.price-input');

    priceInputs.forEach(function(input) {
        input.addEventListener('input', resize);
        resize.call(input);
    });

    function resize() {
        if (this.value.length < 5) {
            this.style.width = (this.value.length) + "ch";
        }
    }
}

function updateShoppingCart() {

    let cartCountElement = document.querySelectorAll('.cart-count .centered');
    cartCountElement.forEach(element => {
        let cartCount = Number(element.textContent);
        console.log(cartCount);
        cartCount += 1;
        element.textContent = cartCount;
    });

    let cart = document.querySelectorAll('.cart-count');
    cart.forEach(function(element) {
        element.style.display = 'inline';
    });
}

/* quantity increment and decrement button for products in cart */
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

/* add event listener to 'Add to Cart' buttons */
addToCart = document.querySelectorAll('.add-to-cart');

addToCart.forEach(function(button) {
    button.addEventListener('click', updateShoppingCart);
});

document.addEventListener('DOMContentLoaded', setPriceSize);

window.addEventListener('load', setProductDescriptionHeight);
window.addEventListener('resize', setProductDescriptionHeight);