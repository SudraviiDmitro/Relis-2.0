let favourite_btn = document.querySelector(".product__favorite")
let addtocart_btn = document.querySelector(".plus__btn")



addtocart_btn.addEventListener("click", function() {
    addtocart_btn.innerHTML = "fa-solid fa-check"
    addtocart_btn.style.background = "rgb(0, 141, 89)"
})

favourite_btn.addEventListener("click", function() {
    addtocart_btn.innerHTML = "fa-solid fa-heart"
})