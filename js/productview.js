const productView = {
    addToProductView: function (product) {
        let newProduct = product;
        if (typeof product === "string") {
            newProduct = JSON.parse(decodeURI(product));
        }
        const myProductViewItems = this.getAllItems();
        const filteredItem = myProductViewItems.filter(item => item.id == newProduct.id);

        if (filteredItem.length === 1) {
            filteredItem[0].qty = 1;
        } else {
            myProductViewItems.push({
                ...newProduct,
                qty: 1
            });
        }

        localStorage.setItem('MY_PRODUCTVIEW', JSON.stringify(myProductViewItems));
    },
    removeFromProductView: function (id) {
        const myProductViewItems = this.getAllItems();
        const filteredItem = myProductViewItems.filter(item => item.id !== id)

        localStorage.setItem('MY_PRODUCTVIEW', JSON.stringify(filteredItem));
    },
    getAllItems: function () {
        return JSON.parse(localStorage.getItem('MY_PRODUCTVIEW')) || [];
    },
    removeAllItems: function () {
        localStorage.removeItem('MY_PRODUCTVIEW');
    },
    incrementQty: function (id) {
        const myProductViewItems = this.getAllItems();
        const filteredItem = myProductViewItems.filter(item => item.id == id);

        if (filteredItem.length === 1 && filteredItem[0].qty < 10) {
            filteredItem[0].qty += 1;
        }
        localStorage.setItem('MY_PRODUCTVIEW', JSON.stringify(myProductViewItems));
    },

    decrementQty: function (id) {
        const myProductViewItems = this.getAllItems();
        const filteredItem = myProductViewItems.filter(item => item.id == id);

        if (filteredItem.length === 1 && filteredItem[0].qty > 1) {
            filteredItem[0].qty -= 1;
        }
        localStorage.setItem('MY_PRODUCTVIEW', JSON.stringify(myProductViewItems));
    }
}