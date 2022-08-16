"use strict";

function changeMsg() {
	function dateForm(dateObject) {
		let dateCreat = new Intl.DateTimeFormat("en", { weekday: "long" });
		return dateCreat.format(dateObject);
	}

	dateForm();

	let now = new Date();
	let myDate = dateForm(now);
	let dayOfWeek = now.getDay();
	let input = document.querySelector("#name");
	let btn = document.querySelector("button");

	btn.addEventListener("click", () => {
		if (input.value === "") {
			document.querySelector("p").innerHTML =
				"Please enter your name below!";
		} else {
			document.querySelector("p").innerHTML = `Hello ${
				input.value
			}, today is ${myDate}. Only ${
				5 - dayOfWeek
			} left until the weekend!`;
		}
	});

	function clear() {
		document.querySelector("p").innerHTML = "Please enter your name below!";
		document.querySelector("#name").value = "";
	}
	clear();
}

changeMsg();
