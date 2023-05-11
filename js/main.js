var removeItemButton = document.getElementsByClassName('btn_xoa');
console.log(removeItemButton);
for (var i = 0; i < removeItemButton.length; i++) {
    var button = removeItemButton[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateCartTotal();
    })
}

function updateCartTotal() {
    var carItemContainer = document.getElementsByClassName('ghang_item_table_sanpham')[0]
    var cartRows = carItemContainer.getElementsByClassName('ghang_item')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRows = cartRows[i]
        var priceElement = cartRows.getElementsByClassName('ghang_item_table_gia')[0]
        var quantityElement = cartRows.getElementsByClassName('number_slg')[0]
        console.log(priceElement, quantityElement)
    }
}