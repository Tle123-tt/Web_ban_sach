if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn_xoa');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var quanityInputs = document.getElementsByClassName('number_slg');
    for (var i = 0; i < quanityInputs.length; i++) {
        var input = quanityInputs[i];
        input.addEventListener('change', quanityChanged);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}

function quanityChanged(event) {
    var input = event.target;
    if (isNaN(input.vaule) || input.vaule <= 0) {
        input.vaule = 1;
    }
    updateCartTotal();
}

function updateCartTotal() {
    var carItemContainer = document.getElementsByClassName('ghang_rows')[0];
    var cartRows = carItemContainer.getElementsByClassName('ghang_item');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('ghang_item_table_gia')[0];
        var quantityElement = cartRow.getElementsByClassName('number_slg')[0];
        var price = parseFloat(priceElement.innerText.replace('', 'đ'));
        var quanity = quantityElement.vaule;
        total = total + (price * quanity);
    }
    document.getElementsByClassName('tong_tien_dvi')[0].innerHTML = total + 'đ';
}