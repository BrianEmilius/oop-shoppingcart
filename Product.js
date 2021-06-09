// Product.js

function Product({ sku, name, description, price, discount }) {
	this.sku = sku;
	this.name = name;
	this.description = description;
	this.price = price;
	this.discount = discount;
	this.isDiscounted = false;
	this.count = 0;

	this.getSku = function() {
		return this.sku;
	}

	this.getName = function() {
		return this.name;
	}

	this.getDescription = function() {
		return this.description;
	}

	this.getPrice = function() {
		return this.isDiscounted ? this.price * (1 - (this.discount / 100)) : this.price;
	}

	this.getDiscount = function() {
		return this.discount;
	}

	this.makeCampaign = function() {
		this.isDiscounted = !this.isDiscounted;
	}

	this.setCount = function(number) {
		this.count = this.count + number;
	}
}

export default Product;
