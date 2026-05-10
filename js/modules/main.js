import { Chasier } from "./cashier.js";
import { items } from "./items.js";
import { printReceipt } from "./print.js"; 

class main {
    constructor() {

    }
}

const cashier = new Chasier();

cashier.addItem({
    name: "Donut",
    price: 4000,
    total: 6
})
// console.log("Cashier Items Data: " + JSON.stringify(cashier.data.items, null, 2))

cashier.addItem({
    name: "Pizza",
    price: 8000,
    total: 12
})
// console.log("Cashier Items Data: " + JSON.stringify(cashier.data.items, null, 2))

cashier.calculate({ nominal: 600000 });
console.log("Cashier Data: " + JSON.stringify(cashier.data, null, 2))
printReceipt(cashier.getData());


let cart = [];

function tambahKeranjang(nama, harga, image){

    const existing = cart.find(item => item.nama === nama);

    if(existing){

        existing.qty++;

    }else{

        cart.push({
            nama,
            harga,
            image,
            qty: 1
        });
    }

    renderCart();
}

window.tambahKeranjang = tambahKeranjang;

function renderCart(){

    const cartList = document.getElementById("cart-list");

    cartList.innerHTML = "";

    let totalHarga = 0;
    let totalItem = 0;

    cart.forEach((item, index) => {

        totalHarga += item.harga * item.qty;
        totalItem += item.qty;

        cartList.innerHTML += `
        
        <div class="cart-item">

            <img src="${item.image}">

            <div class="cart-detail">

                <h5>${item.nama}</h5>

                <p>${item.harga}</p>

                <div class="qty-box">

                    <button class="qty-btn"
                        onclick="kurangItem(${index})">
                        -
                    </button>

                    <span>${item.qty}</span>

                    <button class="qty-btn"
                        onclick="tambahItem(${index})">
                        +
                    </button>

                </div>

            </div>

            <div class="cart-price">
                Rp ${(item.harga * item.qty).toLocaleString()}
            </div>

        </div>
        `;
    });

    document.getElementById("cart-count").innerText = totalItem;

    document.getElementById("total-item").innerText = totalItem;

    document.getElementById("pay-total-item").innerText = totalItem;

    document.getElementById("total-price").innerText =
        "Rp " + totalHarga.toLocaleString();
}

window.tambahItem = function(index){

    cart[index].qty++;

    renderCart();
}

window.kurangItem = function(index){

    if(cart[index].qty > 1){

        cart[index].qty--;

    }else{

        cart.splice(index, 1);
    }

    renderCart();
}

window.kosongkanKeranjang = function(){

    cart = [];

    renderCart();
}

window.bukaPembayaran = function(){

    const popup = document.getElementById("paymentPopup");

    popup.classList.remove("hidden");

    const paymentItems =
        document.getElementById("payment-items");

    paymentItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.harga * item.qty;

        paymentItems.innerHTML += `
            <div class="d-flex justify-content-between mb-3">

                <span>${item.nama} x ${item.qty}</span>

                <span>
                    Rp ${(item.harga * item.qty).toLocaleString()}
                </span>

            </div>
        `;
    });

    document.getElementById("payment-total-price")
        .innerText = "Rp " + total.toLocaleString();
}

window.tutupPembayaran = function(){

    document.getElementById("paymentPopup")
        .classList.add("hidden");
}

window.prosesPembayaran = function(){

    alert("Pembayaran berhasil!");

    cart = [];

    renderCart();

    tutupPembayaran();
}


async function render() {
    const displayConteiner = document.getElementById("menu");
    displayConteiner.innerHTML = "";
    items.forEach((item, index) => {
        const element = `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card w-100 my-3" style="width: 18rem;" id="card">
                    <img src="${item.image}" alt="..." class="card-img-top rounded-top">
                    <div class="card-body shadow">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.desc}</p>
                        <p class="card-text">${item.price}</p>
                        <div class="input-group" style="width: 100%;">
                                <button class="btn btn-danger fas fa-minus" type="button" id="btnMinus" onclick="
                                    if (Number(document.getElementById('totalInput${ index }').value) > 1) {
                                        document.getElementById('totalInput${ index }').value--;
                                    }
                                " style="width: auto;"></button>
                                <input id="totalInput${ index }" class="form-control text-center" placeholder="Total Barang" type="number" min="1" value="1">
                                <button class="btn btn-success fas fa-plus" type="button" onclick="
                                    document.getElementById('totalInput${ index }').value++;
                                " style="width: auto;" id="btnPlus"></button>
                        </div>
                        <button 
                            class="btn btn-primary mt-3" 
                            style="width: 100%;"
                            onclick="tambahKeranjang('${item.name}',${item.price},'${item.image}')">
                            Masukan Keranjang 
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        displayConteiner.innerHTML += element;
    })
}

render();



export { main }