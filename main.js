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

 //If item doesn't have id, generate one
 if (!id) {
    if (inventory.length === 0) {
      id = 1001; 
    } else {
      id = inventory[inventory.length - 1].id + 1;
    }
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
// products
addProduct(1001, "Laptop", 700, 20);
addProduct(1002, "Mouse", 200, 15);
addProduct(1003, "Keyboard", 400, 7);
addProduct(1004, "Monitor", 900, 9);
addProduct(1001, "Tablet", 500, 8);


// function to display all [products]
function displayInventory() {
  console.log("Current Inventory");
  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];
    console.log(`ID ${product.id}, Name: ${product.name}  Price: ${product.price} Qiantity: ${product.quantity}`)
;    }
}

displayInventory();




function removeProduct(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == name) {
      inventory.splice(i, 1);
      return;
    }
  }
  console.log(`${name} does not exist in inventory`);
}

removeProduct("Laptop");
removeProduct("bag");
console.log("\n","Your inventory after removing items: ");
displayInventory();


function updateStock(productName, quantity, action) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].productName === productName.toLowerCase()) {
      if (action === "add") {
        inventory[i].productQuantity += quantity;
        console.log(
          `${quantity} added to ${inventory[i].productName}. New quantity: ${inventory[i].productQuantity}`
        );
      } else if (action === "remove") {
        if (inventory[i].productQuantity >= quantity) {
          inventory[i].productQuantity -= quantity;
          console.log(
            ` ${quantity} removed from ${inventory[i].productName}. New quantity: ${inventory[i].productQuantity}`
          );
        } else {
          console.log(
            `Cannot remove ${quantity}, we have ${inventory[i].productQuantity} in stock.`
          );
        }
      } else {
        console.log(" Invalid action. Use 'add' or 'remove'.");
      }
    }
  }
 
  console.log(`No product found with name "${productName}"`);
};
 
updateStock("fish", 20, "add");

const generateReportSummary = () => {
  let totalProducts = inventory.length;
  let totalValue = 0;

  let lowStock = [];

  for (let i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].price * inventory[i].quantity;

    let product = inventory[i];

    //Determining of product quantity is low
    if (product.productQuantity < 10) {
      lowStock.push(product.productName);
      console.log(
        ` Low stock alert for product ${product.productName}! with ${product.productQuantity} quantity`
      );
    }
  }

  console.log("\n ****** Inventory Summary ******");

  //list(s) of low stock items
  if (lowStock.length > 0) {
    console.log(` low Stock Products: ${lowStock.join(",")} \n\n`);
  }

  console.log("Total number of products:", totalProducts);
  console.log("Total inventory value:", totalValue, "\n");
};

generateReportSummary();
