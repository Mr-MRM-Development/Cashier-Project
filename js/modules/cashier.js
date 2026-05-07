class Chasier {
    constructor() {
        this.data = {
            price: 0,
            nominal: 0,
            items: [],
            exchange: 0
        };
    }

    calculate() {

    }

    addItem(result) {
        const { name, total, price } = result;

        this.data.items.push({
            name: name,
            total: total,
            price: price,
            totalPrice: (total * price)
        })
    }

    getItems() {
        
    }

}

export { Chasier };