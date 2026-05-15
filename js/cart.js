let totalItem = 0;
let totalHarga = 0;

const cartCount = document.getElementById("cart-count");
const openPopup = document.getElementById("openPopup");
const popupBg = document.getElementById("popupBg");
const closePopup = document.getElementById("closePopup");

/* buka popup */
openPopup.onclick = function () {
    popupBg.classList.toggle("my-hidden");
};

/* tutup popup */
closePopup.onclick = function () {
    popupBg.classList.add("my-hidden");
};

/* klik luar card */
window.onclick = function (e) {

    if (e.target == popupBg) {
        popupBg.classList.add("my-hidden");
    }

};

function updateCart(nama, harga){

    totalItem++;
    totalHarga += harga;

    cartCount.innerText = totalItem;

    console.log(nama + " masuk keranjang");
}

function changeMethod(option) {
    try {
        document.querySelector(".method-card.active").classList.remove("active")
    } catch (error) {
        
    }
    document.querySelector(`.method-card#method-${option}`).classList.add("active")
}