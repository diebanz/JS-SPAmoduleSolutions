"strict mode";

let doc = document.querySelector("html");
let body = document.querySelector("body");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let heading = document.querySelector(".title");
let menuHeadings = document.getElementsByClassName("category");
let arrayOfMenu = Array.from(menuHeadings);
let menuList = document.getElementsByClassName("food-category");
let arrayMenuList = Array.from(menuList);
let windowSize = window.matchMedia("screen and (max-width: 550px)");
let warnings = document.getElementById("warning");
let allergy = document.querySelectorAll(".allergy-info");
let arrayAllergy = Array.from(allergy);
console.log(arrayAllergy);
let allergyCont = document.querySelector(".allergies");
let footerH3 = document.querySelectorAll(".footer h3");
let arrayH3 = Array.from(footerH3);

//reset
doc.style.margin = "0";
doc.style.padding = "0";
doc.style.boxSizing = "border-box";
doc.style.fontSize = "62.5%";

body.style.fontFamily = "Courier New";
body.style.lineHeight = "1.8";
body.style.width = "100wv";
body.style.fontSize = "1.6rem";
body.style.margin = "5rem";

//heading H1
heading.style.textAlign = "center";
heading.style.fontSize = "5rem";

//Styling menu
arrayOfMenu.forEach((el, id) => {
	el.style.color = "#333";
	el.style.fontStyle = "italic";
	el.style.textDecoration = "underline";
	el.style.fontSize = "5rem";
});
//random colors
let colorGenerator = function () {
	let randomColor = "rgba(";
	for (let i = 0; i < 3; i++) {
		randomColor += Math.floor(Math.random() * 255) + ",";
	}
	randomColor += Math.random().toFixed(2) + ")";
	return randomColor;
};

arrayMenuList.forEach((el) => {
	el.style.backgroundColor = colorGenerator();
});

//responsive menu

main.style.display = "flex";
main.style.justifyContent = "space-between";
main.style.flexWrap = "wrap";

let mediaWindow = function (x) {
	arrayMenuList.forEach((el) => {
		if (x.matches) {
			el.style.width = "100%";
		} else {
			el.style.width = "30%";
		}
	});
};

windowSize.addEventListener("change", mediaWindow);

// warnings

warnings.style.fontSize = "3rem";
warnings.style.fontFamily = "Lucida Sans";
warnings.style.textAlign = "center";

// allergies

arrayAllergy.forEach((element, index) => {
	if (index % 2 === 0) {
		element.style.backgroundColor = "pink";
	}
});

allergyCont.style.width = "30rem";
allergyCont.style.margin = "0 auto";

// FOOTER

footer.style.display = "flex";
footer.style.flexWrap = "wrap";
footer.style.textAlign = "center";

arrayH3.forEach((elem) => {
	elem.style.display = "flex";
	elem.style.justifyContent = "center";
	elem.style.alignItems = "center";
	elem.style.padding = "2rem";
	elem.style.width = "10rem";
	elem.style.height = "10rem";
	elem.style.border = "5px solid pink";
	elem.style.borderRadius = "50%";
});

mediaWindow = function (x) {
	if (x.matches) {
		footer.style.flexDirection = "column";
		footer.style.alignItems = "center";
	} else {
		footer.style.flexDirection = "row";
		footer.style.justifyContent = "space-between";
	}
};

windowSize.addEventListener("change", mediaWindow);
