let productDataUrl = 'https://my-json-server.typicode.com/pavan-kumar2/Swag_of_India-Home_page-Products_data/db' 

async function getProducts(productDataUrl) {
    fetch(productDataUrl)
        .then(response => response.json())
        .then(data => {
            let productsData = data.products;
            let cards = '';

            productsData.forEach(product => {

                // new badge
                let isNewDiv = '';
                if (product.isNew === "TRUE") {
                    isNewDiv = '<div class="badge-new"><span class="badge badge-secondary">New</span></div>'
                }

                // product rating
                let stars = '';
                const ratings = Math.floor(product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars += '<i class="fas fa-star"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                }

                cards = cards + `
                            <div class="col-md-4 col-6 card-box" tabindex="0" role="cell" aria-label="${product.imageName}">
                                <div class="card" id="${product.id}">
                                    ${isNewDiv}

                                    <div class="d-flex align-items-center justify-content-center flex-column">
                                        <img class="bd-placeholder-img card-img-top" src="images/${product.source}.png"
                                            alt="shorts" width="100%" height="80%" role="img">

                                        <div class="position-absolute row icons-view">
                                            <div class="col-4 p-0 wishlist" onclick="wishlist.addToWishlist('${encodeURI(JSON.stringify(product))}')"><img src="images/Group 2579.png" alt="wishlist"></div>
                                            <div class="col-4 p-0 view" onclick="productView.addToProductView('${encodeURI(JSON.stringify(product))}')"><a href="./product_view.html"><img src="images/Group 2580.png" alt="view"></a></div>
                                            <div class="col-4 p-0 cart" onclick="cart.addToCart('${encodeURI(JSON.stringify(product))}')"><img src="images/Group 2581.png" alt="cart"></div>
                                        </div>

                                        <div class="card-body card-details">
                                            <h5>${product.name}</h5>
                                            <p><span>Rs ${product.priceAfterDiscount}</span> <span class="discount">Rs ${product.price}</span> <span
                                                    class="dis-offer">(${product.offers}
                                                    off)</span>
                                            </p>
                                            <div class="product-ratings">
                                               ${stars}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            });

            document.getElementById('all-products').innerHTML = cards;
            document.getElementById('featured-products').innerHTML = cards;
            document.getElementById('popular-products').innerHTML = cards;
            document.getElementById('sale-products').innerHTML = cards;
            document.getElementById('best-products').innerHTML = cards;

            // when the page load all icons will hide
            document.querySelectorAll("div[id^='product']").forEach(productElement => {
                productElement.querySelector(".icons-view").classList.add("hide")
            });

            // when mouse over on each product all icons will show and product image get blur
            document.querySelectorAll("div[id^='product']").forEach(items => {
                items.addEventListener("mouseover", () => {
                    items.querySelector(".bd-placeholder-img").classList.add("blur");
                    items.querySelector(".icons-view").classList.remove("hide")

                    // this will active when mousehover and mouseout from wishlist icon
                    document.querySelectorAll(".wishlist").forEach(wishlist => {
                        wishlist.addEventListener("mouseover", () => {
                            if (wishlist.childNodes[0].hasAttribute("src")) {
                                wishlist.childNodes[0].setAttribute("src", "images/Group 2582.png");
                            }
                        })
                        wishlist.addEventListener("mouseout", () => {
                            if (wishlist.childNodes[0].hasAttribute("src")) {
                                wishlist.childNodes[0].setAttribute("src", "images/Group 2579.png");
                            }
                        })
                    })

                    // this will active when mousehover and mouse out from view icon
                    document.querySelectorAll(".view").forEach(view => {
                        view.addEventListener("mouseover", () => {
                            if (view.childNodes[0].childNodes[0].hasAttribute("src")) {
                                view.childNodes[0].childNodes[0].setAttribute("src", "images/Group 2583.png");
                            }
                        })
                        view.addEventListener("mouseout", () => {
                            if (view.childNodes[0].childNodes[0].hasAttribute("src")) {
                                view.childNodes[0].childNodes[0].setAttribute("src", "images/Group 2580.png");
                            }
                        })
                    })

                    // this will active when mousehover and mouseout from cart icon
                    document.querySelectorAll(".cart").forEach(cart => {
                        cart.addEventListener("mouseover", () => {
                            if (cart.childNodes[0].hasAttribute("src")) {
                                cart.childNodes[0].setAttribute("src", "images/Group 2584.png");
                            }
                        })
                        cart.addEventListener("mouseout", () => {
                            if (cart.childNodes[0].hasAttribute("src")) {
                                cart.childNodes[0].setAttribute("src", "images/Group 2581.png");
                            }
                        })
                    })
                })


                items.addEventListener("mouseout", () => {
                    items.querySelector(".bd-placeholder-img").classList.remove("blur");
                    items.querySelector(".icons-view").classList.add("hide")
                })
            })


        });

}
getProducts(productDataUrl)

// selecting left and right button to shop by categories
let catType = document.getElementById("catType");
let catItem = catType.getElementsByClassName("cat-item");

let btnRight = document.querySelector(".btn-right");
btnRight.addEventListener("click", () => {
    catType.append(catItem[0])
})

let btnLeft = document.querySelector(".btn-left");
btnLeft.addEventListener("click", () => {
    catType.prepend(catItem[catItem.length - 1])
})