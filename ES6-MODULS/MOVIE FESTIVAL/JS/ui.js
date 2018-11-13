const $movieTitle = $(".movie-title");
const $movieLength = $(".movie-length");
const $selectGenre = $(".select-genre");
const $movieListDiv = $(".movie-list");
const $allMoviesLength = $(".allMoviesLength");

function collectInput() {
    const title = $movieTitle.val();
    const length = parseInt($movieLength.val());
    const genre = $selectGenre.val();
    // if (!false)

    return {
        title,
        length,
        genre
    }

}

function displayMovie(movie) {
    let $p = $("<p>").text(movie.getInfo());
    $movieListDiv.append($p);
}

function displayTotalLength(totalLength) {
    let $p = $("<p>").text("Total length: " + totalLength);
    $allMoviesLength.append($p);
}

function displayError() {
    let $p = $("<p>").text("Wrong input!");
    $movieListDiv.append($p);
}

function resetInput() {
    $movieTitle.val("");
    $movieLength.val("");
    $selectGenre.val("-");
}

export {
    collectInput,
    displayMovie,
    displayTotalLength,
    resetInput,
    displayError
}
