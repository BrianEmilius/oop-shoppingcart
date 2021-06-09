// Cart.js

function Cart(target) {
	this.content = [];
	this.target = target;
	this.shown = false;

	this.addToCart = function(product) {
		var result = this.content.find(function(cartItem) {
			if (cartItem.sku === product.sku) {
				cartItem.setCount(1);
				return true;
			}
			return false;
		});

		if (!result) {
			product.setCount(1);
			this.content.push(product);
		}
	}

	this.showCart = function() {
		var template = document.getElementById("cartContent");

		this.shown = !this.shown;

		this.target.innerHTML = "";

		if (this.shown) {
			this.content.forEach(product => {
				var clone = template.content.cloneNode(true);
				clone.querySelector(".productTitle").innerText = `${product.count}x ${product.getName()}`;
				clone.querySelector(".productPrice").innerText = product.getPrice().toFixed(2);
				var removeBtn = document.createElement("button");
				removeBtn.className = "removeBtn";
				removeBtn.innerText = "-";
				removeBtn.dataset.sku = product.getSku();
				clone.querySelector(".productItem").appendChild(removeBtn);
				this.target.appendChild(clone);
			});

			var clone = template.content.cloneNode(true);
			clone.querySelector(".productTitle").innerText = "Total";
			clone.querySelector(".productPrice").innerText = this.getTotal().toFixed(2);
			this.target.appendChild(clone);
		}
	}

	this.getTotal = function() {
		var reducer = (accumulator, currentValue) => accumulator + currentValue.getPrice();

		return this.content.reduce(reducer, 0);
	}

	this.removeFromCart = function(sku) {
		this.content = this.content.filter(function(cartItem) {
			return cartItem.sku !== sku;
		});
	}
}

export default Cart;
