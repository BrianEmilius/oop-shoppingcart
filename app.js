import Product from "./Product.js";
import Cart from "./Cart.js";

var cart = new Cart(document.getElementsByClassName("cart")[0]);
var btn = document.getElementsByClassName("cartBtn")[0];

var products = [
	new Product({ name: "Feta", description: "feels good, man", price: 14.50, sku: "234l", discount: 20 }),
	new Product({ name: "Gouda", description: "Mild", price: 36.45, sku: "dlksd3", discount: 12 }),
	new Product({ name: "Potkäse", description: "Yuck!", price: 5.25, sku: "3", discount: 0 })
];

var template = document.getElementById("productFull");
var target = document.getElementsByClassName("products")[0];

products.forEach(function(product) {
	var clone = template.content.cloneNode(true);
	clone.querySelector(".productTitle").innerText = product.getName();
	clone.querySelector(".productPrice").innerText = "DKK " + product.getPrice();
	clone.querySelector(".addToCart").setAttribute("data-sku", product.getSku());
	target.appendChild(clone);
});

target.addEventListener("click", function(event) {
	if (event.target.className === "addToCart") {
		var product = products.find(product => product.getSku() === event.target.dataset.sku);
/* 		product.setCount(1); */
		cart.addToCart(product);
	}
});

btn.addEventListener("click", function() {
	cart.showCart();
});