var main = document.getElementsByTagName("main")[0];
var newImageCat = document.createElement("img");
var newImageDog = document.createElement("img");
newImageCat.src = "http://placekitten.com/200/300";
newImageDog.src = "http://www.placepuppy.net/400/250";
newImageCat.style.border = "2px solid black"
newImageDog.style.border = "2px solid black"
newImageCat.style.borderRadius = "30px"
newImageDog.style.borderRadius = "30px"

if (Modernizr.geolocation) {
    main.appendChild(newImageCat);
  } else {
    main.appendChild(newImageDog);
  }


// ???????????????????????????????????????????????? 
// function(allDivs) {                            ?
// var allDivs = document.querySelectorAll("div");?
                                              //  ?
// for (var i = 0; i < allDivs.length; i++) {     ? 
//     var allDiv = allDivs[i];                   ?
// }                                              ?
// if (allDiv % 2 === 0) {                        ?
//     allDivs.style.backgroundColor = "blue";    ?
// } else {                                       ?
//     allDivs.style.backgroundColor = "red";     ?
// }                                              ?
// } ??????????????????????????????????????????????










// http://placekitten.com/200/300
// http://www.placepuppy.net/400/250