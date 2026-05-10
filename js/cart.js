let totalItem = 0;
let totalHarga = 0;

const cartCount = document.getElementById("cart-count");
const openPopup = document.getElementById("openPopup");
const popupBg = document.getElementById("popupBg");
const closePopup = document.getElementById("closePopup");

/* buka popup */
openPopup.onclick = function () {
    popupBg.style.display = "flex";
};

/* tutup popup */
closePopup.onclick = function () {
    popupBg.style.display = "none";
};

/* klik luar card */
window.onclick = function (e) {

    if (e.target == popupBg) {
        popupBg.style.display = "none";
    }

};

function updateCart(nama, harga){

    totalItem++;
    totalHarga += harga;

    cartCount.innerText = totalItem;

    console.log(nama + " masuk keranjang");
}