// Select the `header` that is the closest to the first `h1` heading. Give the `header` a solid border of 5px.

document.querySelector("h1").closest("header").style.border = "5px solid black";
// If the `.info` section contains an `.info-package`, select all `package-title`s and give the title's previous element a border.

if (
	document
		.querySelector(".info")
		.contains(document.querySelector(".info-package"))
) {
	document.querySelectorAll(".package-title").forEach((title) => {
		title.previousElementSibling.style.border = "2px solid black";
	});
}
// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border.

document.querySelectorAll("label").forEach((label) => {
	if (label.matches(".mild")) label.style.border = "2px solid yellow";
	else if (label.matches(".intense")) label.style.border = "2px solid orange";
	else label.style.border = "2px solid red";
});

// Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. Note: the `.nav-list` should still contain its children.

Array.from(document.querySelector(".nav-list").children).forEach((child) => {
	document.querySelector(".site-map").append(child);
});
