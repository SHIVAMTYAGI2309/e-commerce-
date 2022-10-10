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
        //inner html of add cart products
        return prev + `<div class="col-12 cart-box-mb">
                            <div class="cart-box d-flex flex-md-row flex-column justify-content-between">
                                <div class="cart-img">
                                    <img src="images/${curr.source}.png" alt="${curr.imageName}">
                                </div>
                                <div class="about-product">
                                    <h6 class="mb-2">${curr.name}</h6>
                                    <p class="card-text mb-1 text-muted">color: Multicolor</p>
                                    <p class="card-text mb-1 text-muted">Sold By: Macmerise Celfie Design Private
                                        Limited
                                    </p>
                                    <div class="d-flex flex-row select-size-qty">
                                        <div class="select-size">
                                            <select name="size">
                                                <option value="s">Size: S</option>
                                                <option value="m">Size: M</option>
                                                <option value="l">Size: L</option>
                                                <option value="xl">Size: XL</option>
                                                <option value="xxl">Size: XXL</option>
                                            </select>
                                        </div>

                                        <div class="select-qty">
                                            <span onclick="decrement('${curr.id}')"><i class="fas fa-minus"></i></span><span>${curr.qty}</span><span onclick="increment('${curr.id}')"><i class="fas fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-cost-delivery">
                                    <div class="price-after-discount">Rs ${curr.priceAfterDiscount * curr.qty}</div>
                                    <div class="product-price"><span> Rs ${curr.price * curr.qty}</span><span> ${curr.offers} off</span></div>
                                    <div><span>Delivery in 4 - 6 days</span></div>
                                </div>
                            </div>
                            <div class="product-remove-wishlist">
                                <span onclick="removeCartItem('${curr.id}')">Remove</span><span>|</span><span onclick="moveToWishList('${curr.id}', '${encodeURI(JSON.stringify(curr))}')">Move To Wishlist</span>
                            </div>
                        </div>`;
    }, '');

    // adding innerhtml of price and item index number
    document.getElementById('wrap-cart').innerHTML = cards;

    document.getElementById('totalPrice').innerHTML = Math.floor(totalPrice); //Math.floor for to get round figure numbers to avoid decimal numbers
    document.getElementById('totalPriceAfterDiscount').innerHTML = Math.floor(totalPriceAfterDiscount);
    document.getElementById('totalDiscount').innerHTML = Math.floor(totalDiscount);
    document.getElementById('finalTotal').innerHTML = Math.floor(totalPriceAfterDiscount);

    document.getElementById('cartTotalPrice').innerHTML = Math.floor(totalPriceAfterDiscount);

    document.getElementById('numberOfItems').innerHTML = cartItems.length;

}

function moveToWishList(id, product) {
    removeCartItem(id);
    wishlist.addToWishlist(product);
}

// increment Quantity
function increment(id) {
    cart.incrementQty(id);
    renderCartItems();
}

// decremnet Quantity
function decrement(id) {
    cart.decrementQty(id);
    renderCartItems();
}

//product remove from cart
function removeCartItem(id) {
    cart.removeFromCart(id);
    renderCartItems();
}

renderCartItems();