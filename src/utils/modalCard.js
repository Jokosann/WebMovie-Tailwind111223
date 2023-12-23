export function modalCard(e) {
	return /*html*/ `<div
				class="w-80 h-max top-8 left-[50%] -translate-x-[50%] bg-white absolute shadow-md rounded-md overflow-hidden sm:w-[550px] sm:h-max md:w-[650px] sm:top-28"
			>
				<div class="w-full h-8 bg-primary text-2xl relative">
					<div
						class="absolute rounded-sm -top-1 right-0 m-2 w-6 h-6 flex justify-center items-center bg-white cursor-pointer"
					>
						<i class="ri-close-line modal-close"></i>
					</div>
				</div>
				<div
					class="w-full h-full p-2 flex flex-col gap-2 overflow-hidden sm:flex-row sm:w-full sm:h-full"
				>
					<div class="w-full h-[300px] overflow-hidden rounded-md sm:w-1/3 sm:bg-red-500">
						<img class="w-full h-full" src="${e.Poster}" alt="card" />
					</div>
					<div class="w-full h-max overflow-hidden border border-dark rounded-md sm:w-2/3">
						<h2 class="border-b border-dark p-2 text-base font font-semibold">
							${e.Title} ${e.Year}
						</h2>
						<p class="border-b border-dark p-2 text-sm">
							<span class="font-bold">Genre :</span> ${e.Genre}
						</p>
						<p class="border-b border-dark p-2 text-sm">
							<span class="font-bold">Actors :</span> ${e.Actors}
						</p>
						<p class="border-b border-dark p-2 text-sm">
							<span class="font-bold">Director :</span> ${e.Director}
						</p>
						<p class="px-2 pt-2 text-sm line-clamp-4">
							<span class="font-bold">Plot :</span> <br />
							${e.Plot}
						</p>
					</div>
				</div>
			</div>`;
}
