// Your code goes here!
import { modulo, percentage, percentageOf, difference } from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";

const moduloForm = document.getElementById("modulo-form");
moduloForm.addEventListener("change", (event) => {
	const result = document.getElementById("modulo_result");
	const input = [
		document.getElementById("modulo_1"),
		document.getElementById("modulo_2")
	];
	switch (event.target.id) {
		case "modulo_1":
		case "modulo_2":
			result.value = modulo(
				Number(input[0].value),
				Number(input[1].value)
			);
	}
});

const percentageForm = document.getElementById("percentage-form");

percentageForm.addEventListener("change", (event) => {
	const result = document.getElementById("percentage_result");
	const input = [
		document.getElementById("percentage_1"),
		document.getElementById("percentage_2")
	];
	switch (event.target.id) {
		case "percentage_1":
		case "percentage_2":
			result.value = percentage(
				Number(input[0].value),
				Number(input[1].value)
			);
	}
});

const percentageOfForm = document.getElementById("percentageOf-form");
percentageOfForm.addEventListener("change", (e) => {
	const result = document.getElementById("percentageOf_result");
	const input = [
		document.getElementById("percentageOf_1"),
		document.getElementById("percentageOf_2")
	];
	switch (e.target.id) {
		case "percentageOf_1":
		case "percentageOf_2":
			result.value = percentageOf(
				Number(input[0].value),
				Number(input[1].value)
			);
	}
});

const differenceForm = document.getElementById("difference-form");
differenceForm.addEventListener("change", (e) => {
	const result = document.getElementById("difference_result");
	const input = [
		document.getElementById("difference_1"),
		document.getElementById("difference_2")
	];
	switch (e.target.id) {
		case "difference_1":
		case "difference_2":
			result.value = difference(
				Number(input[0].value),
				Number(input[1].value)
			);
	}
});

const aspectForm = document.getElementById("aspect-form");
const newWidth = document.getElementById("ratio_result-width");
const newHeight = document.getElementById("ratio_result-height");
aspectForm.addEventListener("change", (e) => {
	let result;
	const input = [
		document.getElementById("ratio_1"),
		document.getElementById("ratio_2")
	];
	switch (e.target.id) {
		case "ratio_result-width":
			result = newHeight;
			result.value = calculateAspectRatio(
				Number(input[0].value),
				Number(input[1].value),
				newWidth.value,
				"w"
			);
		case "ratio_result-height":
			result = newWidth;
			result.value = calculateAspectRatio(
				Number(input[0].value),
				Number(input[1].value),
				newHeight.value,
				"h"
			);
	}
});
