var $input = document.querySelector("input");
var $button = document.querySelector(".button");
var $div = document.querySelector("div");

function getIp() {
    var newXML = new XMLHttpRequest();

    newXML.open('GET', 'city.xml');


    newXML.onload = function () {
        var miniDom = newXML.responseXML;
        var from = miniDom.querySelector("city").textContent;
        console.log(from);


        var $p = document.createElement("p");
        $p.textContent = from;
        $div.appendChild($p);
    }


    newXML.send();
}

$button.addEventListener("click", getIp);

