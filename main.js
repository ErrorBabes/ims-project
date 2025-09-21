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
