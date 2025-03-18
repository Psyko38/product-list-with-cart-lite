const ArticleBtnAdd = document.querySelectorAll("article > .ACart > button");
const Article = document.querySelectorAll("article");
const ArticleBtnLower = document.querySelectorAll(
	"article > .ACart > div > button:first-child"
);
const ArticleBtnMore = document.querySelectorAll(
	"article > .ACart > div > button:last-child"
);
const ArticleConteValue = document.querySelectorAll(
	"article > .ACart > div > p"
);
const Span = document.querySelector("span");

const Cadi = document.querySelector(".Cadi");

for (let i = 0; i < ArticleBtnAdd.length; i++) {
	ArticleBtnAdd[i].addEventListener("click", () => {
		Article[i].classList.add("select");
		ArticleConteValue[i].innerHTML = "1";
		Span.innerHTML = Number(Span.innerHTML) + 1;
		GetFullCart();
	});
}

for (let i = 0; i < ArticleBtnLower.length; i++) {
	ArticleBtnLower[i].addEventListener("click", () => {
		ArticleConteValue[i].innerHTML =
			Number(ArticleConteValue[i].innerHTML) - 1;
		Span.innerHTML = Number(Span.innerHTML) - 1;
		GetFullCart();
		if (ArticleConteValue[i].innerHTML <= 0) {
			Article[i].classList.remove("select");
		}
	});
	ArticleBtnMore[i].addEventListener("click", () => {
		ArticleConteValue[i].innerHTML =
			Number(ArticleConteValue[i].innerHTML) + 1;
		Span.innerHTML = Number(Span.innerHTML) + 1;
		GetFullCart();
	});
}

function GetFullCart() {
	Cadi.remove();
	let cartItems = [];
	let maxPrice = 0;
	for (let i = 0; i < ArticleConteValue.length; i++) {
		let itemDetails = [];
		let quantity = Number(ArticleConteValue[i].innerHTML);

		let itemName = "";
		let price = "";
		if (quantity > 0) {
			itemName = Article[i].querySelector(".FullName").innerHTML;
			let priceString = Article[i].querySelector(".Price").innerHTML;
			price = Number(priceString.split("$")[1]); // Access the second element after splitting

			itemDetails.push(itemName);
			itemDetails.push(price);
			itemDetails.push(price * quantity);
			itemDetails.push(i);
			maxPrice = maxPrice + price * quantity;
		}

		if (itemDetails.length > 0) {
			cartItems.push(itemDetails);
			CreatCart(quantity, price, price * quantity, itemName);
		}
	}
	cartItems.push(maxPrice);
	return cartItems;
}

function CreatCart(Q, Dp, P, Name) {
	var var_1 = document.createElement("DIV");
	var_1.setAttribute("class", "Cadi");

	var var_2 = document.createElement("DIV");
	var_2.setAttribute("class", "Cards");

	var var_3 = document.createElement("DIV");
	var_3.setAttribute("class", "Item");
	var_2.appendChild(var_3);

	var var_4 = document.createElement("DIV");
	var_4.setAttribute("class", "Item-Name");
	var_3.appendChild(var_4);

	var var_5 = document.createElement("P");
	var_4.appendChild(var_5);

	var var_6 = document.createTextNode(new String(Name));
	var_5.appendChild(var_6);

	var var_7 = document.createElement("DIV");
	var_7.setAttribute("class", "Item-Info");
	var_3.appendChild(var_7);

	var var_8 = document.createElement("P");
	var_7.appendChild(var_8);

	var var_9 = document.createTextNode(new String(`@$${Q}`));
	var_8.appendChild(var_9);

	var var_10 = document.createElement("P");
	var_7.appendChild(var_10);

	var var_11 = document.createTextNode(new String(`@$${Dp}`));
	var_10.appendChild(var_11);

	var var_12 = document.createElement("P");
	var_7.appendChild(var_12);

	var var_13 = document.createTextNode(new String(`@$${P}`));
	var_12.appendChild(var_13);

	var var_14 = document.createElement("BUTTON");
	var_2.appendChild(var_14);

	var var_15 = document.createElement("IMG");
	var_15.setAttribute("src", "Img/Button - Remove Item.svg");
	var_15.setAttribute("alt", "Close");
	var_14.appendChild(var_15);
	Cadi.appendChild(var_2);
}
