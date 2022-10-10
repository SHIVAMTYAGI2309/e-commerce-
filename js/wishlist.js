const wishlist = {
    addToWishlist: function (product) {
        let newProduct = product;
        if (typeof product === "string") {
            newProduct = JSON.parse(decodeURI(product));
        }

        const myWishlistItems = this.getAllItems();

        const filteredItem = myWishlistItems.filter(item => item.id == newProduct.id);
        if (filteredItem.length === 1) {
            filteredItem[0].qty = 1;
        } else {
            myWishlistItems.unshift({
                ...newProduct,
                qty: 1
            });
        }
        localStorage.setItem('MY_WISHLIST', JSON.stringify(myWishlistItems));

    },
    removeFromWishlist: function (id) {
        const myWishlistItems = this.getAllItems();
        const filteredItem = myWishlistItems.filter(item => item.id !== id);
        localStorage.setItem('MY_WISHLIST', JSON.stringify(filteredItem));
    },
    getAllItems: function () {
        return JSON.parse(localStorage.getItem('MY_WISHLIST')) || [];
    },
    removeAllItems: function () {
        localStorage.removeItem('MY_WISHLIST');
    }
}