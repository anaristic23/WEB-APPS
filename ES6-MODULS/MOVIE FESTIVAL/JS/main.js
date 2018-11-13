import * as ui from "./ui.js"
import * as data from "./data.js"


function init() {
    setupEventListeners()
}

function setupEventListeners() {

    const $inputButton = $(".create-movie");
    $inputButton.on("click", onAddMovieHandler);
}

function onAddMovieHandler(event) {
    const movieInput = ui.collectInput();
    if (movieInput.title == "" || movieInput.length == "") { // TODO NaN works
        ui.displayError();
    } else {
        const { title, length, genre } = movieInput;
        let fullMovie = data.createMovie(title, length, genre);
        ui.displayMovie(fullMovie);
        data.addMovie(fullMovie);
        ui.displayTotalLength(data.getTotalLength());
        ui.resetInput();

    }


}

export {
    init
}


