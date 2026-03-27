//Pass by reference:
//creating a function

/**
 * 
 * @param {object} productdata 
 */
function getProductDetails(productdata){
console.log(productdata); //{ name: 'mackboox pro', brand: 'apple', price: 100, instock: true }
400
product.price=400;

}

let product = { // product is ref var of the object
 
    name:'mackboox pro',
    brand:'apple',
    price: 100,
    instock: true,
}

getProductDetails(product); // passing ref var
console.log(product.price); //400
