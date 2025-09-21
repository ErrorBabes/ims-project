// Global inventory array
let inventory = [];

// Add products
function addProduct(id, name, price, quantity) {
 let product = {
  id: id,
  name: name,
  price: price,
  quantity: quantity,
 }
 // Validate inputs
 if(!id || !name || price <= 0 || quantity < 0) {
  console.log("Invalid product data please check all fields.")
  return false;
 }
 // Check if product id already exists
 for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].id === id) {
    console.log("product with this ID already exists.")
    return false
  }   
 }
    inventory.push(product);
    console.log(`${name} added to inventory`)

};

// function to display all [roducts
function displayInventory() {
  console.log("Current Inventory");
  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];
    console.log(`ID ${product.id}, Name: ${product.name}  Price: ${product.price} Qiantity: ${product.quantity}`)
;    }
}

// products
addProduct(1001, "Laptop", 700,  20)
addProduct(1002,  "Mouse",  200,  15)
addProduct(1003,  "Keyboard",  400, 7)
addProduct(1004,  "Monitor",  900, 9)
addProduct(1001, "Tablet",  500, 8)
addProduct(1007, "Tablet",  0, 0)

displayInventory();
function removeProduct(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == name) {
      inventory.splice(i, 1);
      return;
    }
  }
  console.log(`${name} doesnot exist in inventory`);
}

removeProduct("apple");
removeProduct("bag");
console.log("Your inventory after removing items: ", inventory, "\n");

function updateNewStock(name, quantity) {
    for (item of inventory){
        if (item.productName == name){
            item.quantity += quantity;
            console.log(`Stock for ${name} has been updated. New quantity: ${item.quantity}`);
            return;
        }
    }
    console.log(`${name} does not exist in inventory`);

}

updateNewStock("Amazing Crackers", 50);
updateNewStock("Mixed Fruits", 30);
updateNewStock("Pineapple Juice", 20);
console.log("The update of inventory is ", inventory, "\n");
console.log("\n");

function updateNewStock(name, quantity) {
    for (item of inventory){
        if (item.productName == name){
            item.quantity += quantity;
            console.log(`Stock for ${name} has been updated. New quantity: ${item.quantity}`);
            return;
        }
    }
    console.log(`${name} does not exist in inventory`);

}

updateNewStock("Amazing Crackers", 50);
updateNewStock("Mixed Fruits", 30);
updateNewStock("Pineapple Juice", 20);
console.log("The update of inventory is ", inventory, "\n");
console.log("\n");

const generateReportSummary = () => {
  let totalProducts = inventory.length;
  let totalValue = 0;

  for (let i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].price * inventory[i].quantity;
  }

  console.log("\nInventory Summary");
  console.log("Total number of products:", totalProducts);
  console.log("Total inventory value:", totalValue, "\n");
};
