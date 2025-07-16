// //shopping cart

// let cart= {};
// const products = [
//     {
//         id: 1,
//         name: "Laptop",
//         price: 999.99
//     },
//     {
//         id: 2,
//         name: "Smartphone",
//         price: 499.99
//     },
//     {
//         id: 3,
//         name: "Tablet",
//         price: 299.99
//     }
// ]

// function showProducts() {
//     console.log("Available Products:");
//     products.forEach(product => {
//         console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
//     });
// }

// function showProducts() {
//     console.log("Available Products:");
//     products.map((value)=>{ 
//         cart[value.id] = value.name;
//         console.log(`ID: ${value.id}, Name: ${value.name}, Price: $${value.price}`);
//     })
// }

// showProducts();

// // add to cart function using spread operator
// const addToCart = (productId) => {
//     cart = {
//         ...cart,
//         [productId]: 1
//     };
// }



// addToCart(1);
// addToCart(3);
// console.log("Cart after adding products:", cart);

// const incrementQuantity = (productId) => {
//     if (cart[productId]) {
//         cart[productId] += 1;
//     } else {
//         console.log(`Product with ID ${productId} not found in cart.`);
//     }
// }

// const decrementQuantity = (productId) => {
//     if (cart[productId]) {
//         if (cart[productId] > 1) {
//             cart[productId] -= 1;
//         } else {
//             delete cart[productId];
//         }
//     } else {
//         console.log(`Product with ID ${productId} not found in cart.`);
//     }
// }

// const orderTotal = () => {
//     let total = 0;
//     for (const productId in cart) {
//         const product = products.find(p => p.id === parseInt(productId));
//         if (product) {
//             total += product.price * cart[productId];
//         }
//     }
//     return total.toFixed(2);
// }

// incrementQuantity(1);
// incrementQuantity(2);
// decrementQuantity(3);
// console.log("Cart after modifying quantities:", cart);
// console.log("Order Total: $", orderTotal());


let a =0
let value = a?? 10
console.log(value); 