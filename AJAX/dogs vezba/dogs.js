var $input = document.querySelector("input");
var $button = document.querySelector(".button");
var $div = document.querySelector("div");

function getDog() {
    var newXML = new XMLHttpRequest();

    newXML.open('GET', 'https://dog.ceo/api/breeds/image/random');


    newXML.onload = function () {
        $div.innerHTML = '';

        var data = JSON.parse(newXML.responseText);

        var $image = document.createElement("img");
        $image.setAttribute("src", data.message);
        $div.appendChild($image);

    }
    newXML.send();
}

$button.addEventListener("click", getDog);

