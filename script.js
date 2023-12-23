import { eventClick } from "./src/eventClick.js";
import { cardMovie } from "./src/utils/cardMovie.js";
import { modalCard } from "./src/utils/modalCard.js";

// singkat variabel
const $ = (selector) => {
	return document.getElementById(selector);
};

// variabel
const inputSearch = $("search");
const cardContainer = $("card-container");
const modalCardContainer = $("modal-card-container");

// event click & key
inputSearch.addEventListener("keyup", async function (event) {
	if (event.key === "Enter") {
		await getApi();
	}
});
document.addEventListener("click", async function (event) {
	if (event.target.classList.contains("btn-details")) {
		const imdbid = event.target.dataset.imdbid;
		const dataId = await fetchMovieId(imdbid);
		const modal = modalCard(dataId);
		modalCardContainer.style.display = "block";
		modalCardContainer.innerHTML = modal;
	}
	if (event.target.classList.contains("modal-close")) {
		modalCardContainer.style.display = "none";
	}
});

// get api
async function getApi() {
	try {
		const result = await fetchMovie(inputSearch.value);
		loopingcard(result);
	} catch (err) {
		console.log(err);
	}
}

// fetch movie
async function fetchMovie(value) {
	const data = await fetch("http://www.omdbapi.com/?apikey=c7a6010f&s=" + value)
		.then((res) => res.json())
		.then((res) => res.Search);

	return data;
}

// looping card container
function loopingcard(movie) {
	let card = "";
	movie.forEach((m) => {
		card += cardMovie(m);
		cardContainer.innerHTML = card;
	});
}

// fetch movie ID
async function fetchMovieId(imdbid) {
	const data = fetch("http://www.omdbapi.com/?apikey=c7a6010f&i=" + imdbid).then((res) =>
		res.json()
	);
	return data;
}
