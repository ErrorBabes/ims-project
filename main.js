// Global inventory array
let inventory = [];

// Add products
function addProduct(name, price, quantity) {
  let product = {
    id: inventory.length + 1,
    name: name,
    price: price,
    quantity: quantity,
  };
  // Validate inputs
  if (!name || price <= 0 || quantity < 0) {
    console.log("Invalid product data please check all fields.");
    return false;
  }
  // Check if product id already exists
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      console.log("product with this ID already exists.");
      return false;
    }
  }
  inventory.push(product);
  console.log(`${name} added to inventory`);
}
// products
addProduct("Laptop", 700, 20);
addProduct("Mouse", 200, 15);
addProduct("Keyboard", 400, 7);
addProduct("Monitor", 900, 9);
addProduct("Tablet", 500, 8);

// function to display all [products]
function displayInventory() {
  console.log("Current Inventory");
  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];
    console.log(
      `ID ${product.id}, Name: ${product.name}  Price: ${product.price} Qiantity: ${product.quantity}`
    );
  }
}

displayInventory();

function removeProduct(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() == name.toLowerCase()) {
      inventory.splice(i, 1);
      return;
    }
  }
  console.log(`${name} does not exist in inventory`);
}

removeProduct("laptop");
removeProduct("bag");
console.log("Your inventory after removing items: ", inventory, "\n");

function updateStock(name, quantity, action) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      if (action === "add") {
        inventory[i].quantity += quantity;
        console.log(
          `${quantity} added to ${inventory[i].name}. New quantity: ${inventory[i].quantity}`
        );
      } else if (action === "remove") {
        if (inventory[i].quantity >= quantity) {
          inventory[i].productQuantity -= quantity;
          console.log(
            ` ${quantity} removed from ${inventory[i].name}. New quantity: ${inventory[i].quantity}`
          );
        } else {
          console.log(
            `Cannot remove ${quantity}, we have ${inventory[i].quantity} in stock.`
          );
        }
      } else {
        console.log(" Invalid action. Use 'add' or 'remove'.");
      }
    }
  }

  console.log(`No product found with name "${name}"`);
}

updateStock("fish", 20, "add");
updateStock("Monitor", 5, "remove");

const generateReportSummary = () => {
  let totalProducts = inventory.length;
  let totalValue = 0;

  let lowStock = [];

  for (let i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].price * inventory[i].quantity;

    let product = inventory[i];

    //Determining of product quantity is low
    if (product.quantity < 10) {
      lowStock.push(product.name);
      console.log(
        ` Low stock alert for product ${product.name}! with ${product.quantity} quantity`
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
