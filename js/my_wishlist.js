function renderWishlistItem() {
    const wishlistItem = wishlist.getAllItems();

    const cards = wishlistItem.reduce((prev, curr) => {

            starRatings = '';
            const ratings = Math.floor(curr.ratings);
            for (let i = 1; i <= 5; i++) {
                if (i <= ratings) {
                    starRatings += '<li><i class="fas fa-star"></i></li>'
                } else {
                    starRatings += ' <li><i class="far fa-star"></i></li>'
                }
            }

                return prev + `<div class="row">
                            <div class="wishlist-item col-12 d-flex p-0">
                                <div class="item-img"><img src="./images/${curr.source}.png" alt="${curr.imageName}"></div>
                                <div class="item-detail">
                                    <div><h6>${curr.name}</h6></div>
                                    <div class="item-rating">
                                        <ul>
                                           ${starRatings}
                                        </ul>
                                    </div>
                                    <div class="price-discount">
                                        <span>Rs ${curr.priceAfterDiscount} </span>
                                        <span>Rs ${curr.price}</span>
                                        <span> (${curr.offers} Off)</span>
                                    </div>
                                    <div class="select-size">
                                        <select name="size">
                                            <option value="s">Size: S</option>
                                            <option value="m">Size: M</option>
                                            <option value="l">Size: L</option>
                                            <option value="xl">Size: XL</option>
                                            <option value="xxl">Size: XXL</option>
                                        </select>
                                    </div>
                                    <div class="addcart-removewishlist">
                                        <span><button class="addcart-btn" onclick="moveToCart('${curr.id}', '${encodeURI(JSON.stringify(curr))}')">Add to Cart</button></span>
                                        <span>|</span>
                                        <span onclick="removeWishlistItem('${curr.id}')">Remove from wishlist</span>
                                    </div>
                                </div>
                            </div>
                         </div>`
            }, '');

        document.getElementById('wrapWishlist').innerHTML = cards;

        document.getElementById('numberOfWishlisItems').innerHTML = wishlistItem.length
    }

    function moveToCart(id, product) {
        removeWishlistItem(id)
        cart.addToCart(product)
    }
 
    function removeWishlistItem(id) {
        wishlist.removeFromWishlist(id);
        renderWishlistItem();
    }

    renderWishlistItem();