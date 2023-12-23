export function cardMovie(e) {
	return /*html*/ `<div>
										<div class="bg-white rounded-lg shadow-2xl  overflow-hidden h-min">
											<div
												class="w-full h-[400px] md:h-60 sm:h-64 xs:h-80 x:h-64 overflow-hidden rounded-md"
											>
												<img
													class="w-full h-full bg-cover bg-center"
													src="${e.Poster}"
													alt="card"
												/>
											</div>
											<div class="flex flex-col items-start px-2 pb-3">
												<p class="text-slate-500 mt-2">${e.Year}</p>
												<h4 class="font-medium text-dark mb-2 mt-1 line-clamp-2">
													${e.Title}
												</h4>
												<button
													class="btn-details bg-primary px-4 py-1 rounded-md text-white font-medium shadow hover:opacity-90 transition-all"
													data-bs-target="#modal-card-conatiner"
													data-imdbid="${e.imdbID}"
												>
													Show More
												</button>
											</div>
										</div>
									</div>`;
}
