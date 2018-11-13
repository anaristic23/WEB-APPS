var $button = $(".button");

$button.on("click", function () {
    var request = $.ajax("https://api.github.com/search/users?q=ana");

})