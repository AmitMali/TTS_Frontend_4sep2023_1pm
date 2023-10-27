const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGUxOWNiNjNiYjBkOGFkMmNjNmFhZTJhZDQzYzQ1MSIsInN1YiI6IjYzM2MwOWUyYzJmZjNkMDA4MjNmNzQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E4Zzk5FKDT7n9oBCwjC0E4wdMU74Rv8tbn0tU_HlF6s",
  },
};

const loadMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  try {
    const resp = await fetch(url, options);
    const result = await resp.json();
    const movies = result.results;
    const moviesContainer = document.getElementById("movies");
    let moviesElem = "";
    movies.map((movie) => {
      moviesElem += `
        <div class="m-1 mb-8 w-auto px-1 mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div class="rounded-lg bg-white shadow-lg">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" class="rounded-t-lg" />
          <div class="p-4">
            <h2 class="mb-2 text-lg font-semibold">${movie.title}</h2>
            <p class="mb-2 text-sm text-gray-700">Release Date: ${movie.release_date}</p>
            <a href="#" class="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Watch Movie</a>
          </div>
        </div>
      </div>
        `;
    });
    moviesContainer.innerHTML = moviesElem;
  } catch (err) {
    console.log(err);
  }
};
loadMovies();
