const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome = document.getElementById("welcome")

if (isMorning) {
    welcome.textContent = "Good morning! Welcome to my page."
} else if (isAfternoon) {
    welcome.textContent = "Good afternoon! Welcome to my page."
} else if (isEvening) {
    welcome.textContent = "Good evening! Welcome to my page."
}

const books = [
    {
        title: "Wings of Fire",
        author: "Tui T. Sutherland",
        released: "07/01/2012",
        genres: ["Fantasy", "Fiction", "Adventure"],
    },

    {
        title: "How to Train Your Dragon",
        author: "Cressida Cowell",
        released: "02/01/2003",
        genres: ["Fantasy", "Fiction"],
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
        released: "11/20/1990",
        genres: ["Science Fiction", "Thriller"],
    },
];

const booksList = document.getElementById("books");

books.forEach((book) => {
    let genreItems = "";
    book.genres.forEach((genre) => {
        genreItems += `<li>${genre}</li>`;
    });

    const html = `
        <li>
            <span class="title">${book.title}</span>
            <span class="author">${book.author}</span>
            <span class="released">${book.released}</span>
            <ul>
                ${genreItems}
            </ul>
        </li>
    `;

    booksList.insertAdjacentHTML("beforeend", html);
});

// background script
const bg = new Image();
bg.src = "images/GSUJ4tFXoAAjUZe.webp";

const focusX = Math.random();
const focusY = Math.random();

const placeBanner = () => {
    if (!bg.naturalWidth || !bg.naturalHeight) {
        return;
    }

    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;
    const imageWidth = bg.naturalWidth;
    const imageHeight = bg.naturalHeight;

    const coverScale = Math.max(viewWidth / imageWidth, viewHeight / imageHeight);
    const scale = coverScale * 1.45;
    const drawnWidth = imageWidth * scale;
    const drawnHeight = imageHeight * scale;

    const offsetX = focusX * Math.max(0, drawnWidth - viewWidth);
    const offsetY = focusY * Math.max(0, drawnHeight - viewHeight);

    document.body.style.setProperty("--bg-size", `${drawnWidth}px ${drawnHeight}px`);
    document.body.style.setProperty("--bg-pos", `${-offsetX}px ${-offsetY}px`);
};

bg.addEventListener("load", placeBanner);
window.addEventListener("resize", placeBanner);
// background script end
