// Declare an interface called Mountain that contains the following properties:
// name - string
// height - number
// Declare an array called mountains which is an array of type Mountain.
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];
// mountains.push{(name: 'Kilimanjaro', height: 19341)}; //How to push it to an array instead//
// Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array
// const findTallestMountain = (mountains: Mountain[]): string => {
//     let tallest = mountains[0];
//     mountains.forEach((mountain) => {
//         if (mountain.height > tallest.height) {
//         tallest = mountain;
//     }
//     });
//     return tallest.name;
// };
function findNameOfTallestMountain(mountains) {
    var tallest = mountains[0];
    mountains.forEach(function (m) {
        if (tallest.height < m.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
// Call findNameOfTallestMountain, passing it your mountains array as an argument
// Store the result of the function call (the return value) in a variable and then console.log
// the variable
// const tallestName = (findNameOfTallestMountain(mountains));
// console.log(tallestName)
console.log(findNameOfTallestMountain(mountains));
// Declare an array called products which is an array of type Product
var products = [
    {
        name: "Potato Salad",
        price: 3.50
    },
    {
        name: "Okra",
        price: 2.50
    },
    {
        name: "Cat Food",
        price: 5
    },
];
// Declare a function called calcAverageProductPrice. It takes one parameter, an array
// of Product objects. It returns a number, the average price of all the products provided
// as an argument.
function calcAverageProductPrice(products) {
    var totalPrice = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        totalPrice += product.price;
    }
    return totalPrice / products.length;
}
// function calcAverageProductPrice(products: Product[]): number {
//   let totalPrice: number = 0;
//   products.foreach(product => {
//     totalPrice += product.price; // total = total + product.price
//   }):
//   return totalPrice / products.length;
// }
// Call calcAverageProductPrice, passing it your products array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log the variable.
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
var inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
//  Declare a function called calcInventoryValue. It takes one parameter, an array of InventoryItem objects. It returns a number, the total value of all the products in the inventory array provided as an argument.
//   This is calculated as follows: For each InventoryItem take the product price times the quantity. Add these together for all the items. For the above data, the total will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
//  
function calcInventoryValue(inventoryItems) {
    var value = 0;
    inventoryItems.forEach(function (item) {
        value += item.product.price * item.quantity;
    });
    return value;
}
// Call calcInventoryValue, passing it your products array as an argument.
//  Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It prints 170).
var valuePrice = calcInventoryValue(inventory);
console.log(valuePrice);
