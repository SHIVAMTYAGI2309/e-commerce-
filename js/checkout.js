function renderCartItems() {
    const cartItems = cart.getAllItems();

    let totalPrice = 0;
    let totalPriceAfterDiscount = 0;
    let totalDiscount = 0;

    // adding product to cart
    const cards = cartItems.reduce((prev, curr) => {

        // different product and number of quantity price changing 
        totalPrice += curr.price * curr.qty;

        totalPriceAfterDiscount += curr.priceAfterDiscount * curr.qty;

        totalDiscount += totalPrice - totalPriceAfterDiscount;
        
        return prev + ''
    }, '');

    document.getElementById('orderSummaryItems').innerHTML = cartItems.length;
    document.getElementById('summaryItems').innerHTML = cartItems.length;

    document.getElementById('totalPrice').innerHTML = Math.floor(totalPrice); //Math.floor for to get round figure numbers to avoid decimal numbers
    document.getElementById('totalPriceAfterDiscount').innerHTML = Math.floor(totalPriceAfterDiscount);
    document.getElementById('totalDiscount').innerHTML = Math.floor(totalDiscount);
    document.getElementById('finalTotal').innerHTML = Math.floor(totalPriceAfterDiscount);
    document.getElementById('finalPaymentButton').innerHTML=Math.floor(totalPriceAfterDiscount)

}

renderCartItems();
