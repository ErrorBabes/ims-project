# 🗄️ IMS Project - Inventory Management System

**Project Overview**  
This project allows you to manage a list of products in a small shop or warehouse.  
It’s an excellent way to practice working with data, functions, and logic in a structured way.  
Users can add, update, remove products, and generate inventory reports efficiently.

---

## 👥 Group Members

- [Christiana Akogwu](https://github.com/Tianaah)
- [Mayowa Folaniyan](https://github.com/Olamayorrh)
- [Aisha Elabass](https://github.com/Aisha-ai715)
- [Ladunni Tegbe](https://github.com/Ladunnitegbe)
- [Ekene Okpala](https://github.com/kenzie-mira)
- Kaloso Mhlelu

---

## 🚀 Core Features

- **Add Product:** Add a new product to the inventory.
- **Remove Product:** Remove a product from the inventory.
- **Update Stock:** Increase or decrease the stock of an existing product.
- **Generate Report:** Show a summary of the inventory, including the total number of products, their value, and a list of low-stock items.

---

## 💡 Concept Application

- **Objects:** Each product is represented as an object with properties like `id`, `name`, `price`, and `quantity`.
- **Arrays:** All product objects are stored in an array named `inventory`.
- **Functions:** Each core feature (`addProduct`, `removeProduct`, `updateStock`, `generateReport`) is implemented as a function to make the code modular and reusable.
- **For Loop:** Used to iterate through the inventory array to find, update, or report on products.
- **If/Else Statements:** Used to check for low stock (`if (product.quantity < 10)`) and show warnings for items that need restocking.
- **Comparison & Logical Operators:** Operators like `===`, `<`, `&&`, `||` are used to validate conditions, such as checking if a product exists before updating it.
- **Boolean:** `lowStock` can be a boolean property for each product object to simplify filtering in reports.
- **Scope:** The `inventory` array is in the global scope for accessibility across functions, while function variables have local scope to prevent conflicts.

---

✨ _Built collaboratively by the ErrorBabes group as part of the Women Techsters Front-End Learning Track._
