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
                        <button class="btn btn-primary mt-3" style="width: 100%;">Masukan Keranjang <i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        `;
        displayConteiner.innerHTML += element;
    })
}

render();



export { main }