// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

const myModal = document.getElementById("myModal");

const promiseOfModal = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve(myModal);
	}, 6000);
});

promiseOfModal.then((result) => {
	result.style.display = "block";
});

const close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function (e) {
	myModal.style.display = "none";
});
// \/ All of your javascript should go here \/
