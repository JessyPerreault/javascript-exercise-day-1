var spanStyle = $("span").css({"display": "block","height": "100px", "width": "100px", "border-radius": "50px", "box-shadow": "5px 5px 5px #888888"})

$("#colors").on("click", function() {
    $("span").css({ "background": randomColor()});

});



