function removeProduct(name){
    for(let i=0; i<inventory.length; i++){
        if (inventory[i].name == name){
            inventory.splice(i,1);
            return;
        }
    }
    console.log(`${name} doesnot exist in inventory`);
}

removeProduct("apple");
removeProduct("bag");
console.log("Your inventory after removing items: ", inventory, "\n");
