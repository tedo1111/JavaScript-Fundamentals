class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        if (this.capacity >= product.quantity) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
            return `Product ${product.name} added to storage.`;
        } else {
            return 'Not enough capacity in storage.';
        }
    }

    getProducts() {
        return this.storage.map(product => JSON.stringify(product)).join('\n');
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

let storage = new Storage(50);
console.log(storage.addProduct(productOne));
console.log(storage.addProduct(productTwo));
console.log(storage.addProduct(productThree));

console.log(storage.getProducts());


console.log(storage.capacity);
console.log(storage.totalCost); 
