const books = [
	{
		title: "The Design of EveryDay Things",
		author: "Don Norman",
		alreadyRead: false,
		img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
	},
	{
		title: "The Most Human Human",
		author: "Brian Christian",
		alreadyRead: true,
		img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
	},
	{
		title: "Thinking with Type",
		author: "Ellen Lupton",
		alreadyRead: true,
		img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
	},
	{
		title: "Eloquent JavaScript",
		author: "Marijn Haverbeke",
		alreadyRead: false,
		img: "https://eloquentjavascript.net/img/cover.jpg"
	}
];

let listOfBooks = document.querySelector(".book-list");
let media = [
	window.matchMedia("screen and (min-width: 992px)"),
	window.matchMedia("screen and (min-width: 576px) and (max-width: 991px)"),
	window.matchMedia("screen and (max-width: 575px)")
];

listOfBooks.style.listStyle = "none";
listOfBooks.style.display = "flex";
listOfBooks.style.gap = "1rem";

let arrBooks = [];
let arrAuthors = [];

for (let i = 0; i < 4; i++) {
	let book = document.createElement("li");
	book.classList.add("items");
	book.style.border = "1px solid #333";

	listOfBooks.append(book);

	let title = document.createElement("h3");
	title.innerText = books[i].title;
	title.style.fontSize = "1.5rem";
	title.style.margin = "1rem 0.5rem";

	let img = document.createElement("img");
	img.src = books[i].img;
	img.style.width = "100%";
	img.style.height = "15rem";
	img.style.border = "4px solid black";

	let authorName = document.createElement("h6");
	authorName.innerText = books[i].author.split(" ").reverse().join(", ");
	authorName.style.color = "#999";
	authorName.style.margin = "2rem 0.5rem";
	arrAuthors.push(books[i].author);

	let status = document.createElement("div");
	let readOrNot = books[i].alreadyRead;
	let statusBtn = document.createElement("p");

	let whatStatus = function () {
		statusBtn.style.color = "#fff";
		statusBtn.style.width = "35%";
		statusBtn.style.marginLeft = "auto";
		statusBtn.style.textAlign = "center";
		statusBtn.style.borderRadius = "10px";
		statusBtn.style.padding = "5px";
		statusBtn.style.marginTop = ".5rem";

		if (readOrNot === true) {
			statusBtn.innerText = "Read";
			statusBtn.style.backgroundColor = "green";
		} else {
			statusBtn.innerText = "To read";
			statusBtn.style.backgroundColor = "grey";
		}
	};

	whatStatus();

	status.style.borderTop = "1px solid #333";
	status.style.padding = ".5rem";
	status.style.backgroundColor = "#ddd";

	book.appendChild(img);
	book.appendChild(title);
	book.appendChild(authorName);
	book.append(status);
	status.appendChild(statusBtn);

	let sorting = function (a, b) {
		for (let i = 0; i < books.length; i++) {
			if (a.author.split(" ")[1] < b.author.split(" ")[1]) {
				return 1;
			} else if (a.author.split(" ")[1] > b.author.split(" ")[1]) {
				return -1;
			} else {
				return 0;
			}
		}
	};

	books.sort(sorting);

	//Array of book for responsiveness.
	arrBooks.push(book);
}

// responsiveness.

function checkScreen() {
	arrBooks.forEach((element) => {
		if (media[0].matches) {
			element.style.width = "20%";
		}
		if (media[1].matches) {
			element.style.width = "40%";
		}

		if (media[2].matches) {
			element.style.width = "100%";
		}
	});
}

for (var i = 0; i < media.length; i++) {
	checkScreen(media[i]);
	media[i].addEventListener("change", checkScreen);
}
