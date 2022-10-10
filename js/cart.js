const cart = {
    //adding product to cart
    addToCart: function (product) {
        let newProduct = product;
        if (typeof product === "string") {
            newProduct = JSON.parse(decodeURI(product));
        }
        const myCartItems = this.getAllItems();

        const filteredItem = myCartItems.filter(item => item.id == newProduct.id);

        if (filteredItem.length === 1) {
            filteredItem[0].qty += 1;
        } else {
            myCartItems.unshift({
                ...newProduct,
                qty: 1
            });
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    },

    //remove product from add to cart items
    removeFromCart: function (id) {
        const myCartItems = this.getAllItems();
        const filteredItem = myCartItems.filter(item => item.id !== id);

        localStorage.setItem('MY_CART', JSON.stringify(filteredItem));
    },

    getAllItems: function () {
        return JSON.parse(localStorage.getItem('MY_CART')) || [];
    },

    removeAllItems: function () {
        localStorage.removeItem('MY_CART');
    },

    //incremnting quantity of add to cart product
    incrementQty: function (id) {
        const myCartItems = this.getAllItems();
        const filteredItem = myCartItems.filter(item => item.id == id);

        if (filteredItem.length === 1 && filteredItem[0].qty < 10) {
            filteredItem[0].qty += 1;
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    },
    
    //decrementing quantity of add to cart product
    decrementQty: function (id) {
        const myCartItems = this.getAllItems();
        const filteredItem = myCartItems.filter(item => item.id == id);

        if (filteredItem.length === 1 && filteredItem[0].qty > 1) {
            filteredItem[0].qty -= 1;
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    }
}