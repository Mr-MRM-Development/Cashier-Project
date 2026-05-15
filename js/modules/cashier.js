/**
 * -------------------------------------------------------------
 * 
 *               (C) 2026 Team 1 Cashier Application
 *                       By: M. Rizqy Mubarok
 * 
 * -------------------------------------------------------------
 */

class Chasier {
    constructor() {
        this.data = {
            price: 0,
            nominal: 0,
            items: [],
            exchange: 0,
            totalItems: 0
        };
    }

    calculate(result) {
        this.data.price      = 0;
        this.data.totalItems = 0;

        const { nominal } = result;
        this.data.nominal = Number(nominal);
        
        this.data.items.forEach((item, index) => {
            this.data.price      += item.totalPrice;
            this.data.totalItems += item.total;
        })

        this.data.exchange = this.data.nominal - this.data.price;
        return this.data;
    }

    addItem(result) {
        const { name, total, price } = result;

        this.data.items.push({
            name: name,
            total: total,
            price: price,
            totalPrice: (total * price)
        })

        this.data.price      = 0;
        this.data.totalItems = 0;

        this.data.items.forEach((item, index) => {
            this.data.price      += item.totalPrice;
            this.data.totalItems += item.total;
        })
    }

    setItem(result) {
        const { index, total, method } = result;
        if (method === "add") {
            this.data.items[index].total += total;
        } else {
            this.data.items[index].total -= total;
            if (this.data.items[index].total <= 0) {
                this.data.items.splice(index, 1)
            }
        }
        return this.data.items[index].total;
    }

    getItems() {
        return this.data.items;
    }

    getData() {
        return this.data;
    }

    clearData() {
        this.data = {
            price: 0,
            nominal: 0,
            items: [],
            exchange: 0,
            totalItems: 0
        };
    }
}

export { Chasier };