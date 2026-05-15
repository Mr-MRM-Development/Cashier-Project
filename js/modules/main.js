import { Chasier } from "./cashier.js";
import { items } from "./items.js";
import { printReceipt } from "./print.js"; 

class main {
    constructor() {

    }
}

const cashier = new Chasier();

/**
 * 
 *  @method Debugging Data Test
 * 
 */

// cashier.addItem({
//     name: "Donut",
//     price: 4000,
//     total: 6
// })
// // console.log("Cashier Items Data: " + JSON.stringify(cashier.data.items, null, 2))

// cashier.addItem({
//     name: "Pizza",
//     price: 8000,
//     total: 12
// })
// // console.log("Cashier Items Data: " + JSON.stringify(cashier.data.items, null, 2))

// cashier.calculate({ nominal: 600000 });
// console.log("Cashier Data: " + JSON.stringify(cashier.data, null, 2))

window.printReceipt = printReceipt;


async function addToCart(result){
    const { name, price, id } = result;
    const total = await document.getElementById(id).value;
    cashier.addItem({
        name: name,
        price: price,
        total: Number(total)
    });
    // cashier.calculate({nominal: 500000});
    renderCart();

    console.log(JSON.stringify(cashier.data, null, 2))
}

window.addToCart = addToCart;

function renderCart(){

    const cartList = document.getElementById("cart-list");

    cartList.innerHTML = "";

    cashier.data.items.forEach((item, index) => {

        cartList.innerHTML += `
        
        <div class="cart-item">

            <!--img src="${item.image}"-->

            <div class="cart-detail">

                <h5>${item.name}</h5>

                <p>${(item.price).toLocaleString("id-ID")}</p>

                <div class="qty-box">

                    <button class="qty-btn"
                        onclick="kurangItem(${index})">
                        -
                    </button>

                    <span>${item.total}</span>

                    <button class="qty-btn"
                        onclick="tambahItem(${index})">
                        +
                    </button>

                </div>

            </div>

            <div class="cart-price">
                Rp ${(item.totalPrice).toLocaleString("id-ID")}
            </div>

        </div>
        `;
    });

    document.getElementById("cart-count").innerText = cashier.data.totalItems;

    document.getElementById("total-item").innerText = cashier.data.totalItems;

    document.getElementById("pay-total-item").innerText = cashier.data.totalItems;

    document.getElementById("total-price").innerText =
        "Rp" + (cashier.data.price).toLocaleString("id-ID") + ",00";
    
    document.getElementById("payment-total-price").innerText =
        "Rp" + (cashier.data.price).toLocaleString("id-ID") + ",00";
}

window.tambahItem = (index) => {
    cashier.setItem({
        index: index,
        total: 1,
        method: "add"
    });
    renderCart();
}

window.kurangItem = (index) => {
    cashier.setItem({
        index: index,
        total: 1,
        method: "less"
    });
    renderCart();
}

window.kosongkanKeranjang = () => {
    cashier.clearData();
    renderCart()
}

window.bukaPembayaran = () => {

    const popup = document.getElementById("paymentPopup");

    popup.classList.remove("hidden");

    const paymentItems =
        document.getElementById("payment-items");

    paymentItems.innerHTML = "";

    cart.forEach(item => {

        paymentItems.innerHTML += `
            <div class="d-flex justify-content-between mb-3">

                <span>${"p"} x ${"p"}</span>

                <span>
                    Rp ${("p").toLocaleString()}
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
    cashier.clearData();
    renderCart();
    tutupPembayaran();

    setTimeout(() => {
        if (confirm("Cetak Struk?")) {
            printReceipt(cashier.getData())
        }
    }, 1000)
}

document.getElementById("cash-input").addEventListener("input", () => {
    cashier.calculate({
        nominal: (Number(document.getElementById("cash-input").value))
    });
    document.getElementById("cash-change")
        .textContent = "Rp" + (cashier.data.exchange).toLocaleString("id-ID") + ",00";
})

async function render() {
    const displayConteiner = document.getElementById("menu");
    displayConteiner.innerHTML = "";
    items.forEach((item, index) => {
        const element = `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card w-100 my-3" style="width: 18rem;" id="card">
                    <img src="${item.image}" class="card-img-top rounded-top" style="width: 100%; height: 300px; object-fit: cover;">
                    <div class="card-body shadow">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.desc}</p>
                        <p class="card-text">Rp${(item.price).toLocaleString("id-ID")},00</p>
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
                            onclick="addToCart({name: '${item.name}', price: ${item.price}, id: 'totalInput${ index }'})">
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