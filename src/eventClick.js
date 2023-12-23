export function eventClick() {
	// hamburger menu
	const hamburger = document.getElementById("hamburger"),
		navLink = document.getElementById("nav-link"),
		closeNavLink = document.getElementById("close-nav-link");

	hamburger.addEventListener("click", () => {
		navLink.classList.toggle("show-nav-link");
	});

	closeNavLink.addEventListener("click", () => {
		navLink.classList.remove("show-nav-link");
	});

	// search menu
	const searchMenu = document.getElementById("search-menu"),
		search = document.getElementById("search-container"),
		inputSearch = document.getElementById("search"),
		searchClose = document.getElementById("search-close");

	inputSearch.addEventListener("keyup", function (e) {
		if (e.key === "Enter") {
			search.classList.remove("show-search");
		}
	});

	searchMenu.addEventListener("click", () => {
		search.classList.toggle("show-search");
	});

	searchClose.addEventListener("click", () => {
		search.classList.remove("show-search");
	});
}

eventClick();
