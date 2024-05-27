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
            this.style.width = (this.value.length) + "ch"; // Add 1ch to avoid cutting off the last character
        }
    }
}

document.addEventListener('DOMContentLoaded', setPriceSize);

window.addEventListener('load', setProductDescriptionHeight);
window.addEventListener('resize', setProductDescriptionHeight);
