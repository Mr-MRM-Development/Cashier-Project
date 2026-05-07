import { Chasier } from "./cashier.js";
import { items } from "./items.js";

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

console.log("Cashier Items Data: " + JSON.stringify(cashier.data.items, null, 2))

async function render() {
    const displayConteiner = document.getElementById("menu");
    displayConteiner.innerHTML = "";
    items.forEach((item, index) => {
        const element = `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card w-100 my-3" style="width: 18rem;">
                    <img src="${item.image}" alt="..." class="card-img-top rounded-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.desc}</p>
                        <p class="card-text">${item.price}</p>
                        <input id="totalInput${ index }" placeholder="Total Barang" type="number" min="1" value="1">
                        <a href="#" class="btn btn-primary">Masukan Keranjang</a>
                    </div>
                </div>
            </div>
        `;
        displayConteiner.innerHTML += element;
    })
}

render();


export { main }