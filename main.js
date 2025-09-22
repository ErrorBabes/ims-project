// Global inventory array
let inventory = [];

// Add products
function addProduct(name, price, quantity) {
  // Validate inputs
  if (!name || price <= 0 || quantity < 0) {
    console.log("Invalid product data, please check all fields.");
    return false;
  }

  // Check if product name already exists
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      console.log("Product with this name already exists.");
      return false;
    }
  }

  const product = {
    id: inventory.length + 1,
    name: name,
    price: price,
    quantity: quantity,
  };

  inventory.push(product);
  console.log(`${name} added to inventory`);
}

// Adding products
addProduct("Laptop", 700, 20);
addProduct("Mouse", 200, 15);
addProduct("Keyboard", 400, 7);
addProduct("Monitor", 900, 9);
addProduct("Tablet", 500, 8);

// Display inventory
function displayInventory() {
  console.log("\nCurrent Inventory:");
  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];
    console.log(
      `ID ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
    );
  }
}

displayInventory();

// Remove product by name
function removeProduct(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      inventory.splice(i, 1);
      console.log(`${name} removed from inventory`);
      return;
    }
  }
  console.log(`${name} does not exist in inventory`);
}

// Remove some products
removeProduct("Laptop");
removeProduct("Bag");
console.log("\nInventory after removing items:");
displayInventory();

// Update stock
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
          inventory[i].quantity -= quantity;
          console.log(
            `${quantity} removed from ${inventory[i].name}. New quantity: ${inventory[i].quantity}`
          );
        } else {
          console.log(
            `Cannot remove ${quantity}, only ${inventory[i].quantity} in stock.`
          );
        }
      } else {
        console.log("Invalid action. Use 'add' or 'remove'.");
      }
      return; // stop loop after updating
    }
  }

  console.log(`No product found with name "${name}"`);
}

// Test updateStock
updateStock("Fish", 20, "add");
updateStock("Monitor", 5, "remove");

// Generate inventory summary
const generateReportSummary = () => {
  let totalProducts = inventory.length;
  let totalValue = 0;
  let lowStock = [];

  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];
    totalValue += product.price * product.quantity;

    // Check low stock
    if (product.quantity < 10) {
      lowStock.push(product.name);
      console.log(
        `Low stock alert: ${product.name} has only ${product.quantity} items`
      );
    }
  }

  console.log("\n****** Inventory Summary ******");
  if (lowStock.length > 0) {
    console.log(`Low Stock Products: ${lowStock.join(", ")}\n`);
  }
  console.log("Total number of products:", totalProducts);
  console.log("Total inventory value:", totalValue, "\n");
};

generateReportSummary();
