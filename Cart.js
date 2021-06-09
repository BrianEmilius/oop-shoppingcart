// Cart.js

function Cart(target) {
	this.content = [];
	this.target = target;

	this.addToCart = function(product) {
		this.content.push(product);
	}

	this.showCart = function() {
		var template = document.getElementById("cartContent");

		this.target.innerHTML = "";

		this.content.forEach(product => {
			var clone = template.content.cloneNode(true);
			clone.querySelector(".productTitle").innerText = product.getName();
			clone.querySelector(".productPrice").innerText = product.getPrice();
			this.target.appendChild(clone);
		});
	}
}

export default Cart;
