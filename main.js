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

const generateReportSummary = () => {
  let totalProducts = inventory.length;
  let totalValue = 0;

  for (let i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].price * inventory[i].quantity;
  }

  console.log("\n=== Inventory Summary ===");
  console.log("Total number of products:", totalProducts);
  console.log("Total inventory value:", totalValue);
  console.log("========================\n");
};
