import Movie from "./model/Movie.js"

const storage = {
    movies: [],
}

function createMovie(title, length, genre) {
    return new Movie(title, length, genre)
}

function addMovie(movie) {
    storage.movies.push(movie);
}

function calculateTotalLength() {
    let totalLength = 0;
    for (let i = 0; i < storage.movies.length; i++) {
        const movieLength = storage.movies[i].length;
        totalLength += movieLength;
    }
    return totalLength;
}

function getTotalLength() {
    return calculateTotalLength();
}

export {
    createMovie,
    addMovie,
    getTotalLength
}

