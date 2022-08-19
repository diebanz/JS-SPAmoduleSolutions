"use strict";

const apiUrl = "https://api.coinbase.com/v2/prices";
const entryField = document.querySelector(".field__entry");
const outputField = document.querySelector(".field__output");
const form = document.querySelector("#form");
const input = document.querySelector("#input__from");
const output = document.querySelector("#output");

const convert = async () => {
	const url = `${apiUrl}/${entryField.value}-${outputField.value}/spot`;
	console.log(url);

	const response = await fetch(url);
	const result = await response.json();
	output.value = (Number(result.data.amount) * input.value).toFixed(2);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	convert();
});
