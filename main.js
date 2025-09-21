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
