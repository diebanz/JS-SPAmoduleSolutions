const button = document.querySelector("button");
const list = document.querySelector("ul");

callbackToggleList = (event) => {
	list.classList.toggle("d-none");
	button.textContent = list.classList.contains("d-none")
		? "Show destinations"
		: "Hide destinations";
};

button.addEventListener("click", callbackToggleList);

/* Bonus */

const destinations = document.querySelectorAll("li");

callbackSelect = (event) => {
	const selected = document.querySelector(".active");
	selected.classList.remove("active");
	event.target.classList.add("active");

	let message = document.querySelector(".message");
	if (!document.body.contains(message)) {
		message = document.createElement("div");
		message.classList.add("alert", "alert-success", "mt-4", "message");
	}
	message.textContent = `You selected ${event.target.textContent}`;
	list.append(message);
};

destinations.forEach((destination) => {
	destination.addEventListener("click", callbackSelect);
});
