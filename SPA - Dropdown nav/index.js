"strict mode";

//grabbing and creating elements

let body = document.querySelector("body");
body.style.fontSize = "2rem";

//header
let header = document.createElement("header");
header.style.backgroundColor = "lightblue";
header.style.height = "100vh";

//H1
let h1 = document.createElement("h1");
h1.innerHTML = "Christopher Nolan's movies";
h1.style.textAlign = "center";
h1.style.fontSize = "6rem";
h1.style.padding = "4rem";
h1.style.color = "#fff";
h1.style.borderBottom = ".5rem solid #242353";
h1.style.backgroundColor = "#333dc9";

// navigation with dropdowns
let nav = document.createElement("nav");
let ul = document.createElement("ul");
ul.style.padding = "2rem";
ul.style.width = "80%";
ul.style.margin = "0 auto";
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.justifyContent = "space-between";

body.append(header);
header.append(h1);
header.append(nav);
nav.append(ul);

//Filling up with movies

let movieFillUp = function () {
    let movies = [
        {
            title: "The Prestige",
            actors: ["Christian Bale", "Huge Jackman", "Sir Michael Cane"],
        },
        {
            title: "Inception",
            actors: ["Leonardo Di Caprio", "Tom Hardy", "Kane Watanbe"],
        },
        {
            title: "Memento",
            actors: ["Guy Pearce", "Carrie-Ann Moss", "Joe Pantoliano"],
        },
        {
            title: "Interstellar",
            actors: [
                "Matthew McConaughey",
                "Anne Hathaway",
                "Sir Michael Cane",
            ],
        },
        {
            title: "Dark Knight",
            actors: ["Christian Bale", "Tom Hardy", "Heath Ledger"],
        },
    ];

    for (let i of movies) {
        let li = document.createElement("li");
        ul.append(li);
        li.classList.add("list__item");
        li.innerText = i.title;
        li.style.fontSize = "2.5rem";
        li.style.textTransform = "uppercase";
        li.style.color = "#333";
        let ulTwo = document.createElement("ul");
        ulTwo.classList.add("nested__ul");
        ulTwo.style.listStyle = "none";
        ulTwo.style.padding = "3rem";
        li.append(ulTwo);
        ulTwo.style.display = "none";

        for (let j of i.actors) {
            let liTwo = document.createElement("li");
            liTwo.classList.add("nested__item");
            ulTwo.append(liTwo);
            liTwo.innerText = j;
            liTwo.style.margin = "2rem 0";
            liTwo.style.fontSize = "1.5rem";
        }
    }
};

movieFillUp();

let titles = document.querySelectorAll(".list__item");
let nestedList = document.querySelectorAll(".nested__ul");
let arrList = Array.from(nestedList);
let arrTitles = Array.from(titles);
let activeMenu = 0;

arrTitles.forEach((el, index) => {
    el.addEventListener("click", function () {
        if (arrList[index].style.display === "none") {
            arrList[activeMenu].style.display = "none";
            arrList[index].style.display = "block";
            arrList[index].style.backgroundColor = "#eee";
            activeMenu = index;
        } else {
            arrList[index].style.display = "none";
        }
    });
});
